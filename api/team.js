export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'No team id' });

  const url = `https://api.football-data.org/v4/teams/${id}/matches?status=FINISHED&limit=5`;

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': 'b89f9b0e01c546c0a4c2a36107bbd57c' }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({ error: 'Failed' });
  }
}
