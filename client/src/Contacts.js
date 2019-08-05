import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

export const GET_CONTACTS = gql`
{
   contacts {
    id 
    firstName 
    lastName 
  }
}
`;
const Contacts = () => (
  <Query query={GET_CONTACTS}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>ERROR</p>;
      return (
        <React.Fragment>
          {data.contacts.map(contact => (
             <p key={contact.id}>{contact.firstName} {contact.lastName}</p>
            ))}
        </React.Fragment>
      );
    }}
  </Query>
);
export default Contacts;

