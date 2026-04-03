const TEAM_COLORS = {
  'Arsenal FC':'#EF0107','Chelsea FC':'#034694','Liverpool FC':'#C8102E',
  'Manchester City FC':'#6CABDD','Manchester United FC':'#DA291C',
  'Tottenham Hotspur FC':'#132257','Newcastle United FC':'#241F20',
  'Aston Villa FC':'#95BFE5','West Ham United FC':'#7A263A',
  'Brighton & Hove Albion FC':'#0057B8','Brentford FC':'#e30613',
  'Fulham FC':'#CC0000','Wolverhampton Wanderers FC':'#FDB913',
  'Everton FC':'#003399','Crystal Palace FC':'#1B458F',
  'Nottingham Forest FC':'#DD0000','Bournemouth FC':'#DA291C',
  'Leicester City FC':'#003090','Ipswich Town FC':'#3a64a3',
  'Southampton FC':'#D71920','Real Madrid CF':'#FEBE10',
  'FC Barcelona':'#A50044','Bayern München':'#DC052D',
  'Paris Saint-Germain FC':'#004170','Juventus FC':'#333333',
  'AC Milan':'#FB090B','FC Internazionale Milano':'#010E80',
  'Club Atlético de Madrid':'#CB3524'
};

function getInitials(name) {
  return name.replace(/ FC| CF| SC| AFC/g,'').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
}

function getBadgeColor(name) {
  return TEAM_COLORS[name] || '#1D9E75';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const matchDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diff = Math.round((matchDay - today) / 86400000);
  const time = d.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'});
  if (diff === 0) return 'Today ' + time;
  if (diff === 1) return 'Tomorrow ' + time;
  return d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'}) + ' · ' + time;
}

function isDerby(home, away) {
  const derbies = [
    ['Arsenal','Tottenham'],['Liverpool','Everton'],
    ['Manchester United','Manchester City'],
    ['Chelsea','Arsenal'],['Newcastle','Sunderland']
  ];
  return derbies.some(([a,b]) =>
    (home.includes(a) && away.includes(b)) ||
    (home.includes(b) && away.includes(a))
  );
}

function renderFixtures(matches, isLive) {
  const container = document.getElementById('fixtures-container');
  const statusArea = document.getElementById('status-area');

  if (isLive) {
    statusArea.innerHTML = '<div class="status-bar">Live data loaded successfully</div>';
  } else {
    statusArea.innerHTML = '<div class="error-bar">Could not load live data — showing sample fixtures</div>';
  }

  if (!matches || matches.length === 0) {
    container.innerHTML = '<div class="loading">No fixtures found for this filter.</div>';
    return;
  }

  container.innerHTML = matches.slice(0,12).map(m => {
    const home = m.homeTeam.name;
    const away = m.awayTeam.name;
    const hc = getBadgeColor(home);
    const ac = getBadgeColor(away);
    const isLiveMatch = m.status === 'IN_PLAY' || m.status === 'PAUSED';
    const isFinished = m.status === 'FINISHED';
    const scoreDisplay = (isLiveMatch || isFinished)
      ? `<div class="score">${m.score.fullTime.home ?? 0} – ${m.score.fullTime.away ?? 0}</div>`
      : `<div class="vs">vs</div>`;
    const timeLabel = isLiveMatch ? 'LIVE' : formatDate(m.utcDate);
    const shortHome = home.replace(/ FC| CF| SC| AFC/g,'');
    const shortAway = away.replace(/ FC| CF| SC| AFC/g,'');
    const derby = isDerby(home, away);

    return `
      <div class="fixture-card">
        <div class="card-top">
          <span class="competition">${m.competition?.name || 'Match'}</span>
          <span class="match-time ${isLiveMatch ? 'live' : ''}">${timeLabel}</span>
        </div>
        <div class="teams">
          <div class="team">
            <div class="team-badge" style="background:${hc}22;color:${hc}">${getInitials(home)}</div>
            <div class="team-name">${shortHome}</div>
          </div>
          <div class="score-box">${scoreDisplay}</div>
          <div class="team">
            <div class="team-badge" style="background:${ac}22;color:${ac}">${getInitials(away)}</div>
            <div class="team-name">${shortAway}</div>
          </div>
        </div>
        <div class="card-bottom">
          ${isLiveMatch ? '<span class="tag live-tag">Live now</span>' : ''}
          ${isFinished ? '<span class="tag">Full time</span>' : ''}
          ${derby ? '<span class="tag derby">Derby</span>' : ''}
          <a class="ticket-btn" href="https://www.stubhub.co.uk/search?q=${encodeURIComponent(shortHome)}" target="_blank">Tickets →</a>
        </div>
      </div>`;
  }).join('');
}

const SAMPLE = [
  {homeTeam:{name:'Liverpool FC'},awayTeam:{name:'Arsenal FC'},utcDate:new Date(Date.now()+86400000*2).toISOString(),status:'SCHEDULED',competition:{name:'Premier League'},score:{fullTime:{home:null,away:null}}},
  {homeTeam:{name:'Manchester City FC'},awayTeam:{name:'Chelsea FC'},utcDate:new Date(Date.now()+86400000*3).toISOString(),status:'SCHEDULED',competition:{name:'Premier League'},score:{fullTime:{home:null,away:null}}},
  {homeTeam:{name:'Tottenham Hotspur FC'},awayTeam:{name:'Arsenal FC'},utcDate:new Date(Date.now()+86400000*4).toISOString(),status:'SCHEDULED',competition:{name:'Premier League'},score:{fullTime:{home:null,away:null}}},
  {homeTeam:{name:'Manchester United FC'},awayTeam:{name:'Manchester City FC'},utcDate:new Date(Date.now()+86400000*5).toISOString(),status:'SCHEDULED',competition:{name:'Premier League'},score:{fullTime:{home:null,away:null}}},
  {homeTeam:{name:'Real Madrid CF'},awayTeam:{name:'FC Barcelona'},utcDate:new Date(Date.now()+86400000*7).toISOString(),status:'SCHEDULED',competition:{name:'La Liga'},score:{fullTime:{home:null,away:null}}},
];

async function fetchFixtures(filter) {
  document.getElementById('fixtures-container').innerHTML = '<div class="loading">Loading...</div>';
  document.getElementById('status-area').innerHTML = '';

  try {
    const res = await fetch(`/api/fixtures?filter=${filter || 'all'}`);
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    renderFixtures(data.matches || [], true);
  } catch(e) {
    renderFixtures(filter === 'all' ? SAMPLE : [], false);
  }
}

document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    fetchFixtures(c.dataset.filter);
  });
});

let searchTimeout;
document.getElementById('search-input').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();

  clearTimeout(searchTimeout);

  if (q === '') {
    document.querySelectorAll('.fixture-card').forEach(card => {
      card.style.display = '';
    });
    return;
  }

  searchTimeout = setTimeout(() => {
    document.querySelectorAll('.fixture-card').forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none';
    });

    const visibleCards = document.querySelectorAll('.fixture-card:not([style*="none"])');
    if (visibleCards.length === 0) {
      document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      document.querySelector('[data-filter="all"]').classList.add('active');
      fetchFixtures('all').then(() => {
        document.querySelectorAll('.fixture-card').forEach(card => {
          card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
      });
    }
  }, 400);
});
