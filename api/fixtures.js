export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { filter } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const future = new Date(Date.now() + 86400000 * 45).toISOString().split('T')[0];

  const map = { PL:'PL', BL:'BL1', SA:'SA', PD:'PD', FL:'FL1', DED:'DED' };
  const code = map[filter] || 'PL';

  try {
    const response = await fetch(
      'https://api.football-data.org/v4/competitions/' + code + '/matches?dateFrom=' + today + '&dateTo=' + future,
      { headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' } }
    );
    const data = await response.json();
    res.status(200).json({ matches: data.matches || [] });
  } catch(e) {
    res.status(500).json({ error: 'Failed' });
  }
}
