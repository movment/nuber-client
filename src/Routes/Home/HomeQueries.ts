import { gql } from 'apollo-boost';

export const REPORT_LOCATION = gql`
  mutation reportMovement($lat: Float!, $lng: Float!) {
    ReportMovment(lastLat: $lat, lastLng: $lng) {
      ok
    }
  }
`;
