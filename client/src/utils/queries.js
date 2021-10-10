// TODO: import GraphQL from apollo
import { gql } from '@apollo/client';
// import gql from 'graphql-tag';


export const QUERY_ME = gql`
  query me{
    me {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;