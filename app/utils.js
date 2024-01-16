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
        category {
          name
          slug
        }
        tags {
          name
          slug
        }
      }
    }
  }
}
`
const GET_RECENT_POSTS = `
query GetRecentPosts {
  posts(orderBy: publishedAt_DESC, first: 3) {
    title
    featuredImage {
      url
    }
    createdAt
    slug
    tags {
      name
      slug
    }
    category {
      name
      slug
    }
  }
}
`

export const getPosts = cache(async () => {
  const hygraph = new GraphQLClient(graphqlAPI)
  const data = await hygraph.request(GET_POSTS);
  return data.postsConnection.edges
})

export const getRecentPosts = cache(async () => {
  const hygraph = new GraphQLClient(graphqlAPI)
  const data = await hygraph.request(GET_RECENT_POSTS);
  return data.posts
})

export const getPostDetails = cache(async (slug) => {
  const hygraph = new GraphQLClient(graphqlAPI)
  const data = await hygraph.request(`
    query GetPostDetails {
      post(where: {slug: "${slug}"}) {
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
        tags {
          name
          slug
        }
        content {
          raw
        }
        category {
          name
          slug
        }
      }
    }`)
  return data.post
})
