import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_CONTACTS } from './Contacts';

function  AddContact (props){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSave = ( mutate ) => {
    props.mutate({
      variables: {firstName, lastName},
      update: (store, { data: {addContact }}) => {
        const data = store.readQuery({ query: GET_CONTACTS });
        data.contacts.push(addContact);
        store.writeQuery({ query: GET_CONTACTS, data});
      }
    })
    .then( res => {
      setFirstName(firstName);
      setLastName(lastName);
    });
  }
  return (
    <div>
      <input
        value={firstName}
        placeholder='First name'
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        value={lastName}
        placeholder='Last name'
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={() => handleSave()}>Save</button>
    </div>
  )
}


const createContact = gql`
  mutation addContact($firstName: String!, $lastName: String!) {
    addContact(firstName: $firstName, lastName: $lastName ) {
      id
      firstName
      lastName
    }
  }
`;

const AddContactsWithMutation = graphql(createContact)(AddContact);

export default AddContactsWithMutation;
