export default (req, res) => {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=Yeon;Max-Age=3600;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
};