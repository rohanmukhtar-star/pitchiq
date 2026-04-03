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

let allLoadedMatches = [];
let currentFilter = 'PL';
let currentView = 'fixtures';

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
  const content = document.getElementById('main-content');
  const statusArea = document.getElementById('status-area');

  statusArea.innerHTML = isLive
    ? '<div class="status-bar">Live data loaded successfully</div>'
    : '<div class="error-bar">Could not load live data</div>';

  if (!matches || matches.length === 0) {
    content.innerHTML = '<div class="loading">No fixtures found.</div>';
    return;
  }

  content.innerHTML = '<div class="section-label">Upcoming fixtures</div>' +
    matches.slice(0,50).map(m => {
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
      const ticketQuery = shortHome + ' vs ' + shortAway + ' tickets buy';
      const ticketUrl = 'https://www.google.com/search?q=' + encodeURIComponent(ticketQuery);

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
            <a class="ticket-btn" href="${ticketUrl}" target="_blank">Tickets →</a>
          </div>
        </div>`;
    }).join('');
}

function getRowClass(pos, total) {
  if (pos <= 4) return 'champions';
  if (pos === 5 || pos === 6) return 'europa';
  if (pos >= total - 2) return 'relegation';
  return '';
}

function renderStandings(table) {
  const content = document.getElementById('main-content');
  const statusArea = document.getElementById('status-area');
  statusArea.innerHTML = '<div class="status-bar">Live standings loaded</div>';

  if (!table || table.length === 0) {
    content.innerHTML = '<div class="loading">No standings available.</div>';
    return;
  }

  const total = table.length;
  content.innerHTML = `
    <div class="section-label">League table</div>
    <div class="standings-table">
      <div class="standings-header">
        <span>#</span>
        <span>Team</span>
        <span>P</span>
        <span>W</span>
        <span>D</span>
        <span>L</span>
        <span>Pts</span>
      </div>
      ${table.map(row => {
        const name = row.team.name;
        const short = name.replace(/ FC| CF| SC| AFC/g,'');
        const color = getBadgeColor(name);
        const rowClass = getRowClass(row.position, total);
        return `
          <div class="standings-row ${rowClass}">
            <div class="pos">${row.position}</div>
            <div class="standings-team">
              <div class="standings-badge" style="background:${color}22;color:${color}">${getInitials(name)}</div>
              <div class="standings-name">${short}</div>
            </div>
            <div class="standings-stat">${row.playedGames}</div>
            <div class="standings-stat">${row.won}</div>
            <div class="standings-stat">${row.draw}</div>
            <div class="standings-stat">${row.lost}</div>
            <div class="standings-pts">${row.points}</div>
          </div>`;
      }).join('')}
    </div>
    <div class="legend">
      <div class="legend-item"><div class="legend-dot" style="background:#1D9E75"></div> Champions League</div>
      <div class="legend-item"><div class="legend-dot" style="background:#378ADD"></div> Europa League</div>
      <div class="legend-item"><div class="legend-dot" style="background:#E24B4A"></div> Relegation</div>
    </div>`;
}

async function fetchFixtures(filter) {
  document.getElementById('main-content').innerHTML = '<div class="loading">Loading...</div>';
  document.getElementById('status-area').innerHTML = '';

  try {
    const res = await fetch(`/api/fixtures?filter=${filter || 'PL'}`);
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    allLoadedMatches = data.matches || [];
    renderFixtures(allLoadedMatches, true);
  } catch(e) {
    allLoadedMatches = [];
    renderFixtures([], false);
  }
}

async function fetchStandings(filter) {
  document.getElementById('main-content').innerHTML = '<div class="loading">Loading...</div>';
  document.getElementById('status-area').innerHTML = '';

  try {
    const res = await fetch(`/api/standings?filter=${filter || 'PL'}`);
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    renderStandings(data.table || []);
  } catch(e) {
    document.getElementById('main-content').innerHTML = '<div class="loading">Could not load standings.</div>';
  }
}

document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    currentFilter = c.dataset.filter;
    document.getElementById('search-input').value = '';
    if (currentView === 'fixtures') fetchFixtures(currentFilter);
    else fetchStandings(currentFilter);
  });
});

document.getElementById('btn-fixtures').addEventListener('click', () => {
  currentView = 'fixtures';
  document.getElementById('btn-fixtures').classList.add('active');
  document.getElementById('btn-table').classList.remove('active');
  document.getElementById('search-input').style.display = '';
  fetchFixtures(currentFilter);
});

document.getElementById('btn-table').addEventListener('click', () => {
  currentView = 'table';
  document.getElementById('btn-table').classList.add('active');
  document.getElementById('btn-fixtures').classList.remove('active');
  document.getElementById('search-input').style.display = 'none';
  fetchStandings(currentFilter);
});

document.getElementById('search-input').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();
  if (q === '') {
    renderFixtures(allLoadedMatches, true);
    return;
  }
  const filtered = allLoadedMatches.filter(m =>
    m.homeTeam.name.toLowerCase().includes(q) ||
    m.awayTeam.name.toLowerCase().includes(q) ||
    (m.competition?.name || '').toLowerCase().includes(q)
  );
  renderFixtures(filtered, true);
});

fetchFixtures('PL');
