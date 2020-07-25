export default async (req, res) => {
  const searchTerm = req.url.split('?')[1]

  const data = await fetch(`https://jobs.github.com/positions.json?${searchTerm}`)
  const response = await data.json()

  res.status(200).json(response)
}
