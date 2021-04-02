import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return contacts.length > 0 ? (
    <Grid item xs={12} sm={6}>
      <h1 className="form-title">My Contacts</h1>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </Grid>
  ) : (
    <Grid item xs={12} sm={6}>
      <h1 className="form-title">No Contacts</h1>
    </Grid>
  );
};

export default ContactList;
