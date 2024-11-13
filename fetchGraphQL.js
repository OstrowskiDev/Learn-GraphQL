// Define the GraphQL query with variables and fragments
const query = `
  query getUser($id: ID!) {
    user(id: $id) {
      ...userFields
      posts {
        id
        title
        comments {
          id
          content
        }
      }
    }
  }

  fragment userFields on User {
    id
    name
    email
    age
  }
`

// Function to fetch data using the GraphQL query with variables
async function fetchData(userId) {
  const response = await fetch('https://example.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { id: userId },
    }),
  })

  const data = await response.json()
  console.log(data)
}

// Call the function to fetch data with a specific user ID
fetchData('1')
