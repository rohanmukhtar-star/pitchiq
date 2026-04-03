export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { filter } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const future = new Date(Date.now() + 86400000 * 14).toISOString().split('T')[0];

  const map = { PL:'PL', BL:'BL1', SA:'SA', PD:'PD' };
  const code = map[filter] || 'PL';

  try {
    const [fixturesRes, standingsRes] = await Promise.all([
      fetch(`https://api.football-data.org/v4/competitions/${code}/matches?dateFrom=${today}&dateTo=${future}`, {
        headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
      }),
      fetch(`https://api.football-data.org/v4/competitions/${code}/standings`, {
        headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
      })
    ]);

    const fixturesData = await fixturesRes.json();
    const standingsData = await standingsRes.json();

    const formMap = {};
    const table = standingsData?.standings?.[0]?.table || [];
    table.forEach(row => {
      if (row.team && row.team.id) {
        formMap[row.team.id] = row.form || '';
      }
    });

    const matches = (fixturesData.matches || []).map(m => ({
      ...m,
      homeTeam: {
        ...m.homeTeam,
        form: formMap[m.homeTeam.id] || null
      },
      awayTeam: {
        ...m.awayTeam,
        form: formMap[m.awayTeam.id] || null
      }
    }));

    res.status(200).json({ matches, formMap });
  } catch(e) {
    res.status(500).json({ error: 'Failed', detail: e.message });
  }
}
