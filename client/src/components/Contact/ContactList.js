import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Loading from '../Loading/Loading';

const ContactList = () => {
  const { contacts, loading } = useContext(ContactContext);

  const contactList = contacts.map(contact => (
    <ContactItem key={contact._id} contact={contact} />
  ));

  return (
    <Grid item xs={12} sm={6}>
      <h1 className="form-title">
        {loading || contacts.length > 0 ? 'My Contacts' : 'No Contacts'}
      </h1>
      {loading ? <Loading /> : contactList}
    </Grid>
  );
};

export default ContactList;
