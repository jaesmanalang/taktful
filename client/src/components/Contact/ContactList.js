import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <React.Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </React.Fragment>
  );
};

export default ContactList;
