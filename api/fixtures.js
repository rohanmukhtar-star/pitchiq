export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { filter } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const future = new Date(Date.now() + 86400000 * 30).toISOString().split('T')[0];

  let url = `https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${future}`;
  if (filter === 'PL') url = `https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${today}&dateTo=${future}`;
  else if (filter === 'BL') url = `https://api.football-data.org/v4/competitions/BL1/matches?dateFrom=${today}&dateTo=${future}`;
  else if (filter === 'SA') url = `https://api.football-data.org/v4/competitions/SA/matches?dateFrom=${today}&dateTo=${future}`;
  else if (filter === 'PD') url = `https://api.football-data.org/v4/competitions/PD/matches?dateFrom=${today}&dateTo=${future}`;
  else if (filter === 'today') url = `https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`;

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}
