const query = `
  {
    user(id: "1") {
      id
      name
      email
    }
  }
`

async function fetchData() {
  const response = await fetch('https://example.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const data = await response.json()
  console.log(data)
}

fetchData()
