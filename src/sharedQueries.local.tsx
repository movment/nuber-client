import { gql } from 'apollo-boost';
export const LOG_USER_IN = gql`
  # 컴포넌트를 위한 것?
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const LOG_USER_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
