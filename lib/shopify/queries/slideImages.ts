export const slideImagesQuery = `
  query GetMediaImages($after: String) {
    files(first: 20, after: $after) {
      edges {
        node {
          id
          createdAt
          alt
          ... on MediaImage {
            image {
              originalSrc: url
              width
              height
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;