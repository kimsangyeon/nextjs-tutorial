export default (req, res) => {
  res.setHeader('Set-Cookie', 'a_name=Yeon;Max-Age=0;HttpOnly,Secure');
  res.statusCode = 200;
  res.json({ message: 'ok' });
}