export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { filter } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const future = new Date(Date.now() + 86400000 * 14).toISOString().split('T')[0];

  const competitions = ['PL', 'BL1', 'SA', 'PD'];

  try {
    let matches = [];

    if (filter === 'PL') {
      const res2 = await fetch(`https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${today}&dateTo=${future}`, { headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' } });
      const data = await res2.json();
      matches = data.matches || [];
    } else if (filter === 'BL') {
      const res2 = await fetch(`https://api.football-data.org/v4/competitions/BL1/matches?dateFrom=${today}&dateTo=${future}`, { headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' } });
      const data = await res2.json();
      matches = data.matches || [];
    } else if (filter === 'SA') {
      const res2 = await fetch(`https://api.football-data.org/v4/competitions/SA/matches?dateFrom=${today}&dateTo=${future}`, { headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' } });
      const data = await res2.json();
      matches = data.matches || [];
    } else if (filter === 'PD') {
      const res2 = await fetch(`https://api.football-data.org/v4/competitions/PD/matches?dateFrom=${today}&dateTo=${future}`, { headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' } });
      const data = await res2.json();
      matches = data.matches || [];
    } else if (filter === 'today') {
      const responses = await Promise.all(
        competitions.map(c =>
          fetch(`https://api.football-data.org/v4/competitions/${c}/matches?dateFrom=${today}&dateTo=${today}`, {
            headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
          })
        )
      );
      const dataArr = await Promise.all(responses.map(r => r.json()));
      matches = dataArr.flatMap(d => d.matches || []);
    } else {
      const responses = await Promise.all(
        competitions.map(c =>
          fetch(`https://api.football-data.org/v4/competitions/${c}/matches?dateFrom=${today}&dateTo=${future}`, {
            headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
          })
        )
      );
      const dataArr = await Promise.all(responses.map(r => r.json()));
      matches = dataArr.flatMap(d => d.matches || []);
    }

    matches.sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
    res.status(200).json({ matches });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}
