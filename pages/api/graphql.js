export default async (_req, res) => {
  return res.end(`Demo Secret = ${process.env.DEMO_SECRET}`);
};
