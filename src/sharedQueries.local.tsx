import { gql } from 'apollo-boost';
export const LOG_USER_IN = gql`
  # 컴포넌트를 위한 것?
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
