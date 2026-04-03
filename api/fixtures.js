export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { filter } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const future = new Date(Date.now() + 86400000 * 30).toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  let urls = [];

  if (filter === 'PL') {
    urls = [`https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${today}&dateTo=${future}`];
  } else if (filter === 'BL') {
    urls = [`https://api.football-data.org/v4/competitions/BL1/matches?dateFrom=${today}&dateTo=${future}`];
  } else if (filter === 'SA') {
    urls = [`https://api.football-data.org/v4/competitions/SA/matches?dateFrom=${today}&dateTo=${future}`];
  } else if (filter === 'PD') {
    urls = [`https://api.football-data.org/v4/competitions/PD/matches?dateFrom=${today}&dateTo=${future}`];
  } else if (filter === 'today') {
    urls = [
      `https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${today}&dateTo=${tomorrow}`,
      `https://api.football-data.org/v4/competitions/BL1/matches?dateFrom=${today}&dateTo=${tomorrow}`,
      `https://api.football-data.org/v4/competitions/SA/matches?dateFrom=${today}&dateTo=${tomorrow}`,
      `https://api.football-data.org/v4/competitions/PD/matches?dateFrom=${today}&dateTo=${tomorrow}`,
    ];
  } else {
    urls = [
      `https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${today}&dateTo=${future}`,
      `https://api.football-data.org/v4/competitions/BL1/matches?dateFrom=${today}&dateTo=${future}`,
      `https://api.football-data.org/v4/competitions/SA/matches?dateFrom=${today}&dateTo=${future}`,
      `https://api.football-data.org/v4/competitions/PD/matches?dateFrom=${today}&dateTo=${future}`,
    ];
  }

  try {
    const responses = await Promise.all(
      urls.map(url => fetch(url, {
        headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
      }))
    );
    const dataArr = await Promise.all(responses.map(r => r.json()));
    const allMatches = dataArr.flatMap(d => d.matches || []);
    allMatches.sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
    res.status(200).json({ matches: allMatches });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}
