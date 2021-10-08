// TODO: import GraphQL from apollo
import { gql } from '@apollo/client';
// import gql from 'graphql-tag';


export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;