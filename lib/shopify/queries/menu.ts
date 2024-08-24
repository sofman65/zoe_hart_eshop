export const getMenuQuery = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
        items {  # This part assumes your schema supports nested items
          title
          url
   
          
        }
      }
    }
  }
`;
