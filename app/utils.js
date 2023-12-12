import { cache } from 'react'
import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
const GET_POSTS = `
query GetPosts {
  postsConnection {
    edges {
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        featuredPost
        categories {
          name
          slug
        }
      }
    }
  }
}
`

export const getPosts = cache(async () => {
  const hygraph = new GraphQLClient(graphqlAPI)
  const data = await hygraph.request(GET_POSTS);
  return data.postsConnection.edges
})
