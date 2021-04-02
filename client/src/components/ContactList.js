import React, { useContext, useEffect } from 'react';
import ContactContext from '../context/contact/contactContext';

const ContactList = () => {
  const { contacts, fetchContacts } = useContext(ContactContext);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <React.Fragment>
      {contacts.map(contact => {
        <h1 key={contact._id}>{contact.name}</h1>;
      })}
    </React.Fragment>
  );
};

export default ContactList;
