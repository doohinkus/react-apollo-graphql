import React from 'react';
import { Query } from "react-apollo";
// import { gql } from "apollo-boost";
import gql from 'graphql-tag';

const GET_CONTACTS = gql`
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
      console.log(data)
      if (loading) return "Loading...";
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

