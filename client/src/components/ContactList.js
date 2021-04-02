import React, { useContext } from 'react';
import ContactContext from '../context/contact/contactContext';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <React.Fragment>
      {contacts.map(contact => (
        <h1 key={contact._id}>{contact.name}</h1>
      ))}
    </React.Fragment>
  );
};

export default ContactList;
