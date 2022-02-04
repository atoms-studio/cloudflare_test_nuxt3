import { useQuery } from "h3";

function fibonacci(n) {
  for (var fibonacci = [0, 1], i = 1; i < n; i++)
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);

  return fibonacci;
}
export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const query = await useQuery(req);
  res.end(JSON.stringify(fibonacci(query.n)));
};
