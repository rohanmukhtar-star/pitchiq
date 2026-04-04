const TEAM_COLORS = {
  'Arsenal FC':'#EF0107','Chelsea FC':'#034694','Liverpool FC':'#C8102E',
  'Manchester City FC':'#6CABDD','Manchester United FC':'#DA291C',
  'Tottenham Hotspur FC':'#132257','Newcastle United FC':'#241F20',
  'Aston Villa FC':'#95BFE5','West Ham United FC':'#7A263A',
  'Brighton & Hove Albion FC':'#0057B8','Brentford FC':'#e30613',
  'Fulham FC':'#CC0000','Wolverhampton Wanderers FC':'#FDB913',
  'Everton FC':'#003399','Crystal Palace FC':'#1B458F',
  'Nottingham Forest FC':'#DD0000','AFC Bournemouth':'#DA291C',
  'Leicester City FC':'#003090','Ipswich Town FC':'#3a64a3',
  'Southampton FC':'#D71920','Sunderland AFC':'#EB172B',
  'Leeds United FC':'#FFCD00','Burnley FC':'#6C1D45',
  'Bayern München':'#DC052D','Borussia Dortmund':'#FDE100',
  'Bayer 04 Leverkusen':'#E32221','VfB Stuttgart':'#E2001A',
  'Eintracht Frankfurt':'#E1000F','SC Freiburg':'#E8000D',
  'RB Leipzig':'#DD0741','TSG 1899 Hoffenheim':'#1565C0',
  '1. FSV Mainz 05':'#CC0000','FC Augsburg':'#BA3030',
  '1. FC Union Berlin':'#EB1923','SV Werder Bremen':'#1D9E75',
  'VfL Wolfsburg':'#65B32E','Hamburger SV':'#0080C8',
  'Borussia Mönchengladbach':'#000000','FC Heidenheim 1846':'#CC0000',
  'FC St. Pauli':'#6B1A24','1. FC Köln':'#FF2200',
  'Real Madrid CF':'#FEBE10','FC Barcelona':'#A50044',
  'Club Atlético de Madrid':'#CB3524','Sevilla FC':'#D4021D',
  'Valencia CF':'#EE7203','Athletic Club':'#EE2523',
  'Real Sociedad':'#0067B4','Villarreal CF':'#FFDA00',
  'Real Betis Balompié':'#007A3D','Celta de Vigo':'#8CC8E8',
  'Getafe CF':'#3D5B9A','Deportivo Alavés':'#0E4EA3',
  'AC Milan':'#FB090B','FC Internazionale Milano':'#010E80',
  'Juventus FC':'#333333','SSC Napoli':'#0067B4',
  'SS Lazio':'#87D8F7','AS Roma':'#E3001B',
  'Atalanta BC':'#1E3F6F','Torino FC':'#8B0000',
  'ACF Fiorentina':'#5B2D8E','Bologna FC 1909':'#E83121',
  'Cagliari Calcio':'#8B0000','Hellas Verona FC':'#FFD700',
  'Parma Calcio 1913':'#FFD700','US Lecce':'#FFD700',
  'Como 1907':'#1B4B9F','Genoa CFC':'#C8102E',
  'Venezia FC':'#000000','Empoli FC':'#00A0E0',
  'Paris Saint-Germain FC':'#004170','Olympique de Marseille':'#2FAEE0',
  'Olympique Lyonnais':'#0047AB','AS Monaco FC':'#E8192C',
  'LOSC Lille':'#C01629','Stade Rennais FC 1901':'#E8000D',
  'RC Strasbourg Alsace':'#0066CC','OGC Nice':'#E8192C',
  'Stade de Reims':'#DD0000','Montpellier HSC':'#F47920',
  'AFC Ajax':'#D2122E','PSV':'#BE0030','Feyenoord':'#C8102E',
  'AZ Alkmaar':'#DD0000','FC Utrecht':'#F8060B',
  'FC Twente':'#CC0000','Sparta Rotterdam':'#CC0000'
};

const TICKET_SLUGS = {
  'Arsenal FC':'arsenal',
  'Chelsea FC':'chelsea',
  'Liverpool FC':'liverpool',
  'Manchester City FC':'manchester-city',
  'Manchester United FC':'manchester-united',
  'Tottenham Hotspur FC':'tottenham-hotspur',
  'Newcastle United FC':'newcastle-united',
  'Aston Villa FC':'aston-villa',
  'West Ham United FC':'west-ham-united',
  'Brighton & Hove Albion FC':'brighton-and-hove-albion',
  'Brentford FC':'brentford',
  'Fulham FC':'fulham',
  'Wolverhampton Wanderers FC':'wolverhampton-wanderers',
  'Everton FC':'everton',
  'Crystal Palace FC':'crystal-palace',
  'Nottingham Forest FC':'nottingham-forest',
  'AFC Bournemouth':'bournemouth',
  'Leicester City FC':'leicester-city',
  'Ipswich Town FC':'ipswich-town',
  'Southampton FC':'southampton',
  'Sunderland AFC':'sunderland',
  'Leeds United FC':'leeds-united',
  'Burnley FC':'burnley',
  'Bayern München':'bayern-munich',
  'Borussia Dortmund':'borussia-dortmund',
  'Bayer 04 Leverkusen':'bayer-leverkusen',
  'VfB Stuttgart':'vfb-stuttgart',
  'Eintracht Frankfurt':'eintracht-frankfurt',
  'SC Freiburg':'sc-freiburg',
  'RB Leipzig':'rb-leipzig',
  'TSG 1899 Hoffenheim':'tsg-1899-hoffenheim',
  '1. FSV Mainz 05':'1-fsv-mainz-05',
  'FC Augsburg':'fc-augsburg',
  '1. FC Union Berlin':'fc-union-berlin',
  'SV Werder Bremen':'sv-werder-bremen',
  'VfL Wolfsburg':'vfl-wolfsburg',
  'Hamburger SV':'hamburger-sv',
  'Borussia Mönchengladbach':'borussia-monchengladbach',
  'FC Heidenheim 1846':'fc-heidenheim',
  'FC St. Pauli':'fc-st-pauli',
  '1. FC Köln':'1-fc-koln',
  'Real Madrid CF':'real-madrid',
  'FC Barcelona':'barcelona',
  'Club Atlético de Madrid':'atletico-madrid',
  'Sevilla FC':'sevilla',
  'Valencia CF':'valencia',
  'Athletic Club':'athletic-bilbao',
  'Real Sociedad':'real-sociedad',
  'Villarreal CF':'villarreal',
  'Real Betis Balompié':'real-betis',
  'Celta de Vigo':'celta-vigo',
  'Getafe CF':'getafe',
  'Deportivo Alavés':'deportivo-alaves',
  'AC Milan':'ac-milan',
  'FC Internazionale Milano':'inter-milan',
  'Juventus FC':'juventus',
  'SSC Napoli':'ssc-napoli',
  'SS Lazio':'ss-lazio',
  'AS Roma':'as-roma',
  'Atalanta BC':'atalanta',
  'Torino FC':'torino',
  'ACF Fiorentina':'fiorentina',
  'Bologna FC 1909':'bologna',
  'Cagliari Calcio':'cagliari',
  'Hellas Verona FC':'hellas-verona',
  'Parma Calcio 1913':'parma',
  'US Lecce':'lecce',
  'Como 1907':'como',
  'Genoa CFC':'genoa',
  'Venezia FC':'venezia',
  'Empoli FC':'empoli',
  'Paris Saint-Germain FC':'paris-saint-germain',
  'Olympique de Marseille':'olympique-marseille',
  'Olympique Lyonnais':'olympique-lyonnais',
  'AS Monaco FC':'monaco',
  'LOSC Lille':'lille',
  'Stade Rennais FC 1901':'stade-rennais',
  'RC Strasbourg Alsace':'strasbourg',
  'OGC Nice':'ogc-nice',
  'Stade de Reims':'reims',
  'Montpellier HSC':'montpellier',
  'AFC Ajax':'afc-ajax',
  'PSV':'psv-eindhoven',
  'Feyenoord':'feyenoord',
  'AZ Alkmaar':'az-alkmaar',
  'FC Utrecht':'fc-utrecht',
  'FC Twente':'fc-twente',
  'Sparta Rotterdam':'sparta-rotterdam'
};

const LEAGUE_SLUGS = {
  'Premier League':'premier-league',
  'Bundesliga':'german-bundesliga',
  'Serie A':'italian-serie-a',
  'Primera Division':'spanish-la-liga',
  'Ligue 1':'french-ligue-1',
  'Eredivisie':'eredivisie'
};

const TEAM_STADIUMS = {
  'Arsenal FC':'Emirates Stadium','Chelsea FC':'Stamford Bridge',
  'Liverpool FC':'Anfield','Manchester City FC':'Etihad Stadium',
  'Manchester United FC':'Old Trafford','Tottenham Hotspur FC':'Tottenham Hotspur Stadium',
  'Newcastle United FC':'St. James Park','Aston Villa FC':'Villa Park',
  'West Ham United FC':'London Stadium','Brighton & Hove Albion FC':'Amex Stadium',
  'Brentford FC':'Gtech Community Stadium','Fulham FC':'Craven Cottage',
  'Wolverhampton Wanderers FC':'Molineux','Everton FC':'Goodison Park',
  'Crystal Palace FC':'Selhurst Park','Nottingham Forest FC':'City Ground',
  'AFC Bournemouth':'Vitality Stadium','Leicester City FC':'King Power Stadium',
  'Ipswich Town FC':'Portman Road','Southampton FC':'St Marys Stadium',
  'Bayern München':'Allianz Arena','Borussia Dortmund':'Signal Iduna Park',
  'Bayer 04 Leverkusen':'BayArena','VfB Stuttgart':'MHPArena',
  'Eintracht Frankfurt':'Deutsche Bank Park','SC Freiburg':'Europa-Park Stadion',
  'RB Leipzig':'Red Bull Arena','TSG 1899 Hoffenheim':'PreZero Arena',
  '1. FSV Mainz 05':'Mewa Arena','FC Augsburg':'WWK Arena',
  '1. FC Union Berlin':'An der Alten Forsterei','SV Werder Bremen':'Weserstadion',
  'VfL Wolfsburg':'Volkswagen Arena','Hamburger SV':'Volksparkstadion',
  'Borussia Mönchengladbach':'Borussia-Park','FC Heidenheim 1846':'Voith-Arena',
  'FC St. Pauli':'Millerntor-Stadion','1. FC Köln':'RheinEnergieStadion',
  'Real Madrid CF':'Santiago Bernabeu','FC Barcelona':'Spotify Camp Nou',
  'Club Atlético de Madrid':'Wanda Metropolitano',
  'Paris Saint-Germain FC':'Parc des Princes',
  'Juventus FC':'Allianz Stadium','AC Milan':'San Siro',
  'FC Internazionale Milano':'San Siro','SSC Napoli':'Diego Armando Maradona',
  'SS Lazio':'Stadio Olimpico','AS Roma':'Stadio Olimpico',
  'AFC Ajax':'Johan Cruyff Arena','Feyenoord':'De Kuip','PSV':'Philips Stadion',
  'Olympique de Marseille':'Orange Vélodrome','Olympique Lyonnais':'Groupama Stadium',
  'AS Monaco FC':'Stade Louis II','LOSC Lille':'Stade Pierre-Mauroy'
};

let allLoadedMatches = [];
let currentFilter = 'PL';
let currentView = 'fixtures';
let expandedCard = null;
let favourites = JSON.parse(localStorage.getItem('pitchiq_favs') || '[]');

function getInitials(name) {
  return name.replace(/ FC| CF| SC| AFC/g,'').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
}

function getBadgeColor(name) {
  return TEAM_COLORS[name] || '#1D9E75';
}

function getSlug(fullName) {
  if (TICKET_SLUGS[fullName]) return TICKET_SLUGS[fullName];
  return fullName.toLowerCase()
    .replace(/ü/g,'u').replace(/ö/g,'o').replace(/ä/g,'a')
    .replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'').replace(/--+/g,'-');
}

function getTicketUrl(home, away, competitionName) {
  const homeSlug = getSlug(home);
  const awaySlug = getSlug(away);
  const leagueSlug = LEAGUE_SLUGS[competitionName] || 'premier-league';
  return 'https://www.footballticketnet.com/' + leagueSlug + '/' + homeSlug + '-vs-' + awaySlug;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const matchDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diff = Math.round((matchDay - today) / 86400000);
  const time = d.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'});
  if (diff === 0) return 'Today · ' + time;
  if (diff === 1) return 'Tomorrow · ' + time;
  return d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'}) + ' · ' + time;
}

function formatFullDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'}) + ' at ' + d.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'});
}

function isDerby(home, away) {
  const derbies = [
    ['Arsenal','Tottenham'],['Liverpool','Everton'],
    ['Manchester United','Manchester City'],
    ['Chelsea','Arsenal'],['Newcastle','Sunderland'],
    ['Internazionale','Milan'],['Real Madrid','Barcelona'],
    ['Juventus','Torino'],['Atletico','Real Madrid'],
    ['Ajax','Feyenoord'],['PSG','Marseille'],['Roma','Lazio'],
    ['Dortmund','Schalke'],['Hamburg','St. Pauli']
  ];
  return derbies.some(([a,b]) =>
    (home.includes(a) && away.includes(b)) ||
    (home.includes(b) && away.includes(a))
  );
}

function addToCalendar(shortHome, shortAway, dateStr, competitionName) {
  const d = new Date(dateStr);
  const end = new Date(d.getTime() + 105 * 60000);
  const fmt = t => t.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
  const title = encodeURIComponent(shortHome + ' vs ' + shortAway);
  const details = encodeURIComponent(competitionName + ' — via PitchIQ pitchiq-mu.vercel.app');
  window.open('https://www.google.com/calendar/render?action=TEMPLATE&text=' + title + '&dates=' + fmt(d) + '/' + fmt(end) + '&details=' + details, '_blank');
}

function shareMatch(shortHome, shortAway, dateStr, competitionName) {
  const d = new Date(dateStr);
  const dateLabel = d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'});
  const time = d.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'});
  const text = shortHome + ' vs ' + shortAway + '\n' + competitionName + ' · ' + dateLabel + ' · ' + time + '\n\nFixtures, tables & tickets 👇\nhttps://pitchiq-mu.vercel.app';
  if (navigator.share) {
    navigator.share({ title: 'PitchIQ', text });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!')).catch(() => showToast('Copy failed'));
  }
}

function toggleFav(teamName) {
  const idx = favourites.indexOf(teamName);
  if (idx > -1) favourites.splice(idx, 1);
  else favourites.push(teamName);
  localStorage.setItem('pitchiq_favs', JSON.stringify(favourites));
  showToast(favourites.includes(teamName) ? '⭐ Added to favourites' : 'Removed from favourites');
  renderFixtures(allLoadedMatches, true);
}

function showToast(msg) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = msg;
  toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#0d3320;color:#4ade9a;padding:10px 20px;border-radius:20px;font-size:13px;font-weight:700;z-index:9999;border:1px solid #1D9E75;transition:opacity 0.3s';
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

function toggleDetail(cardId) {
  const detail = document.getElementById('detail-' + cardId);
  const card = document.getElementById('card-' + cardId);
  if (!detail) return;
  const isOpen = detail.classList.contains('open');
  if (expandedCard !== null && expandedCard !== cardId) {
    const prev = document.getElementById('detail-' + expandedCard);
    const prevCard = document.getElementById('card-' + expandedCard);
    if (prev) prev.classList.remove('open');
    if (prevCard) prevCard.classList.remove('expanded');
  }
  detail.classList.toggle('open', !isOpen);
  card.classList.toggle('expanded', !isOpen);
  expandedCard = isOpen ? null : cardId;
}

function updateStats(count) {
  const el = document.getElementById('stat-fixtures');
  if (el) el.textContent = count;
}

function renderFixtures(matches, isLive) {
  const content = document.getElementById('main-content');
  const statusArea = document.getElementById('status-area');

  statusArea.innerHTML = isLive
    ? '<div class="status-bar">Live data loaded successfully</div>'
    : '<div class="error-bar">Could not load live data</div>';

  if (!matches || matches.length === 0) {
    content.innerHTML = '<div class="loading">No fixtures found.</div>';
    updateStats(0);
    return;
  }

  const displayed = matches.slice(0,50);
  updateStats(displayed.length);
  expandedCard = null;

  const favMatches = displayed.filter(m => favourites.includes(m.homeTeam.name) || favourites.includes(m.awayTeam.name));
  const otherMatches = displayed.filter(m => !favourites.includes(m.homeTeam.name) && !favourites.includes(m.awayTeam.name));
  const sorted = [...favMatches, ...otherMatches];

  content.innerHTML = '<div class="section-label">Upcoming fixtures</div>' +
    sorted.map((m, i) => {
      const home = m.homeTeam.name;
      const away = m.awayTeam.name;
      const hc = getBadgeColor(home);
      const ac = getBadgeColor(away);
      const isLiveMatch = m.status === 'IN_PLAY' || m.status === 'PAUSED';
      const isFinished = m.status === 'FINISHED';
      const scoreDisplay = (isLiveMatch || isFinished)
        ? '<div class="score">' + (m.score.fullTime.home ?? 0) + ' – ' + (m.score.fullTime.away ?? 0) + '</div>'
        : '<div class="vs">VS</div>';
      const timeLabel = isLiveMatch ? 'LIVE' : formatDate(m.utcDate);
      const shortHome = home.replace(/ FC| CF| SC| AFC/g,'');
      const shortAway = away.replace(/ FC| CF| SC| AFC/g,'');
      const derby = isDerby(home, away);
      const isFav = favourites.includes(home) || favourites.includes(away);
      const competitionName = m.competition?.name || 'Premier League';
      const ticketUrl = getTicketUrl(home, away, competitionName);
      const stadium = TEAM_STADIUMS[home] || 'TBC';
      const matchday = m.matchday ? 'Matchday ' + m.matchday : '';
      const safeHome = home.replace(/'/g,"\\'");
      const safeShortHome = shortHome.replace(/'/g,"\\'");
      const safeShortAway = shortAway.replace(/'/g,"\\'");

      return '<div class="fixture-card" id="card-' + i + '" onclick="toggleDetail(' + i + ')">' +
        '<div class="card-top">' +
          '<span class="competition">' + competitionName + (matchday ? ' · ' + matchday : '') + '</span>' +
          '<span class="match-time ' + (isLiveMatch ? 'live' : '') + '">' + timeLabel + '</span>' +
        '</div>' +
        '<div class="teams">' +
          '<div class="team">' +
            '<div class="team-badge" style="background:' + hc + '22;color:' + hc + '">' + getInitials(home) + '</div>' +
            '<div class="team-name">' + shortHome + '</div>' +
          '</div>' +
          '<div class="score-box">' + scoreDisplay + '</div>' +
          '<div class="team">' +
            '<div class="team-badge" style="background:' + ac + '22;color:' + ac + '">' + getInitials(away) + '</div>' +
            '<div class="team-name">' + shortAway + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="card-bottom" onclick="event.stopPropagation()">' +
          (isLiveMatch ? '<span class="tag live-tag">Live</span>' : '') +
          (isFinished ? '<span class="tag">FT</span>' : '') +
          (derby ? '<span class="tag derby">Derby</span>' : '') +
          (isFav ? '<span class="tag" style="color:#f0a500;background:#fff8e6">⭐</span>' : '') +
          '<button class="icon-btn' + (isFav ? ' fav-active' : '') + '" onclick="toggleFav(\'' + safeHome + '\')" title="Favourite">⭐</button>' +
          '<button class="icon-btn" onclick="addToCalendar(\'' + safeShortHome + '\',\'' + safeShortAway + '\',\'' + m.utcDate + '\',\'' + competitionName + '\')" title="Calendar">📅</button>' +
          '<button class="icon-btn" onclick="shareMatch(\'' + safeShortHome + '\',\'' + safeShortAway + '\',\'' + m.utcDate + '\',\'' + competitionName + '\')" title="Share">↗</button>' +
          '<a class="ticket-btn" href="' + ticketUrl + '" target="_blank">Tickets →</a>' +
        '</div>' +
        '<div class="match-detail" id="detail-' + i + '">' +
          '<div class="detail-row"><span class="detail-label">📍 Venue</span><span class="detail-value">' + stadium + '</span></div>' +
          '<div class="detail-row"><span class="detail-label">📅 Date & Time</span><span class="detail-value">' + formatFullDate(m.utcDate) + '</span></div>' +
          '<div class="detail-row"><span class="detail-label">🏆 Competition</span><span class="detail-value">' + competitionName + '</span></div>' +
          (matchday ? '<div class="detail-row"><span class="detail-label">🎯 Round</span><span class="detail-value">' + matchday + '</span></div>' : '') +
        '</div>' +
      '</div>';
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
  content.innerHTML = '<div class="section-label">League table</div>' +
    '<div class="standings-table">' +
      '<div class="standings-header">' +
        '<span>#</span><span>Team</span><span>P</span><span>W</span><span>D</span><span>L</span><span>Pts</span>' +
      '</div>' +
      table.map(row => {
        const name = row.team.name;
        const short = name.replace(/ FC| CF| SC| AFC/g,'');
        const color = getBadgeColor(name);
        const rowClass = getRowClass(row.position, total);
        return '<div class="standings-row ' + rowClass + '">' +
          '<div class="pos">' + row.position + '</div>' +
          '<div class="standings-team">' +
            '<div class="standings-badge" style="background:' + color + '22;color:' + color + '">' + getInitials(name) + '</div>' +
            '<div class="standings-name">' + short + '</div>' +
          '</div>' +
          '<div class="standings-stat">' + row.playedGames + '</div>' +
          '<div class="standings-stat">' + row.won + '</div>' +
          '<div class="standings-stat">' + row.draw + '</div>' +
          '<div class="standings-stat">' + row.lost + '</div>' +
          '<div class="standings-pts">' + row.points + '</div>' +
        '</div>';
      }).join('') +
    '</div>' +
    '<div class="legend">' +
      '<div class="legend-item"><div class="legend-dot" style="background:#1D9E75"></div> Champions League</div>' +
      '<div class="legend-item"><div class="legend-dot" style="background:#378ADD"></div> Europa League</div>' +
      '<div class="legend-item"><div class="legend-dot" style="background:#e63000"></div> Relegation</div>' +
    '</div>';
}

function renderScorers(scorers) {
  const content = document.getElementById('main-content');
  const statusArea = document.getElementById('status-area');
  statusArea.innerHTML = '<div class="status-bar">Top scorers loaded</div>';

  if (!scorers || scorers.length === 0) {
    content.innerHTML = '<div class="loading">No scorer data available.</div>';
    return;
  }

  content.innerHTML = '<div class="section-label">Top scorers</div>' +
    '<div class="scorers-list">' +
    scorers.map((s, i) => {
      const name = s.player?.name || 'Unknown';
      const team = s.team?.name?.replace(/ FC| CF| SC| AFC/g,'') || '';
      const goals = s.goals || 0;
      const isTop = i < 3;
      return '<div class="scorer-row">' +
        '<div class="scorer-rank' + (isTop ? ' top' : '') + '">' + (i + 1) + '</div>' +
        '<div class="scorer-info">' +
          '<div class="scorer-name">' + name + '</div>' +
          '<div class="scorer-team">' + team + '</div>' +
        '</div>' +
        '<div class="scorer-goals">' +
          '<div class="goals-num">' + goals + '</div>' +
          '<div class="goals-label">Goals</div>' +
        '</div>' +
      '</div>';
    }).join('') +
    '</div>';
}

async function fetchFixtures(filter) {
  document.getElementById('main-content').innerHTML = '<div class="loading">Loading...</div>';
  document.getElementById('status-area').innerHTML = '';
  updateStats('--');
  try {
    const res = await fetch('/api/fixtures?filter=' + (filter || 'PL'));
    if (!res.ok) throw new Error('error');
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
    const res = await fetch('/api/standings?filter=' + (filter || 'PL'));
    if (!res.ok) throw new Error('error');
    const data = await res.json();
    renderStandings(data.table || []);
  } catch(e) {
    document.getElementById('main-content').innerHTML = '<div class="loading">Could not load standings.</div>';
  }
}

async function fetchScorers(filter) {
  document.getElementById('main-content').innerHTML = '<div class="loading">Loading...</div>';
  document.getElementById('status-area').innerHTML = '';
  try {
    const res = await fetch('/api/scorers?filter=' + (filter || 'PL'));
    if (!res.ok) throw new Error('error');
    const data = await res.json();
    renderScorers(data.scorers || []);
  } catch(e) {
    document.getElementById('main-content').innerHTML = '<div class="loading">Could not load scorers.</div>';
  }
}

document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    currentFilter = c.dataset.filter;
    document.getElementById('search-input').value = '';
    if (currentView === 'fixtures') fetchFixtures(currentFilter);
    else if (currentView === 'table') fetchStandings(currentFilter);
    else fetchScorers(currentFilter);
  });
});

document.getElementById('btn-fixtures').addEventListener('click', () => {
  currentView = 'fixtures';
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-fixtures').classList.add('active');
  document.getElementById('search-input').style.display = '';
  fetchFixtures(currentFilter);
});

document.getElementById('btn-table').addEventListener('click', () => {
  currentView = 'table';
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-table').classList.add('active');
  document.getElementById('search-input').style.display = 'none';
  fetchStandings(currentFilter);
});

document.getElementById('btn-scorers').addEventListener('click', () => {
  currentView = 'scorers';
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-scorers').classList.add('active');
  document.getElementById('search-input').style.display = 'none';
  fetchScorers(currentFilter);
});

document.getElementById('search-input').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();
  if (q === '') { renderFixtures(allLoadedMatches, true); return; }
  const filtered = allLoadedMatches.filter(m =>
    m.homeTeam.name.toLowerCase().includes(q) ||
    m.awayTeam.name.toLowerCase().includes(q) ||
    (m.competition?.name || '').toLowerCase().includes(q)
  );
  renderFixtures(filtered, true);
});

fetchFixtures('PL');
