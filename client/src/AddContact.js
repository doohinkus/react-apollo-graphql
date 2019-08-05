import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import { GET_CONTACTS } from './Contacts';

const ADD_CONTACT = gql`
  mutation addContact($firstName: String!, $lastName: String!){
    addContact(firstName: $firstName, lastName: $lastName){
      id
      firstName
      lastName
    }
  }
`;

function AddContact(props){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Mutation 
      mutation={ADD_CONTACT}
    >
      {(AddContact, { data }) => (
        <React.Fragment>
          <h1>Add Contact</h1>
          <label htmlFor="FirstName">First Name:</label>
          <input
            value={firstName}
            name="FirstName"
            placeholder="First Name"
            onChange={ e => setFirstName(e.target.value)} 
          />
          <label htmlFor="LastName">Last Name:</label>
          <input
            value={lastName}
            name="LastName"
            placeholder="Last Name"
            onChange={ e => setLastName(e.target.value)} 
          />
          <button onClick={() => {
            console.log(GET_CONTACTS)
            AddContact({
              variables: {
               firstName,
               lastName
              },
              update: (store, { data: { addContact }}) => {
                const data = store.readQuery({ query: GET_CONTACTS });
                data.contacts.push(addContact);
                store.writeQuery({ query: GET_CONTACTS, data })
              }
            });
            setFirstName("");
            setLastName("");

          }}>Submit Contact</button>
        </React.Fragment>
      )}
    </Mutation>
  );
}


export default AddContact;