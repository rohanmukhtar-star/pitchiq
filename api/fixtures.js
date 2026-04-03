export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { filter } = req.query;

  let url = 'https://api.football-data.org/v4/matches?status=SCHEDULED';
  if (filter === 'PL') url = 'https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED';
  else if (filter === 'CL') url = 'https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED';
  else if (filter === 'EL') url = 'https://api.football-data.org/v4/competitions/EL/matches?status=SCHEDULED';
  else if (filter === 'today') {
    const t = new Date().toISOString().split('T')[0];
    url = `https://api.football-data.org/v4/matches?dateFrom=${t}&dateTo=${t}`;
  }

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch fixtures' });
  }
}
