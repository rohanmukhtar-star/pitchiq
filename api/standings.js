export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { filter } = req.query;
  const map = { PL:'PL', BL:'BL1', SA:'SA', PD:'PD' };
  const code = map[filter] || 'PL';

  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${code}/standings`,
      { headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' } }
    );
    const data = await response.json();
    const table = data?.standings?.[0]?.table || [];
    res.status(200).json({ table });
  } catch(e) {
    res.status(500).json({ error: 'Failed' });
  }
}
