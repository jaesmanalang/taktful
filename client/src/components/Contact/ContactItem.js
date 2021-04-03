import React from 'react';
import Box from '@material-ui/core/Box';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  return (
    <div className={styles.ContactItem}>
      <Box display="flex">
        <ContactsIcon />
        <h4 className={styles.ContactName}>{contact.name}</h4>
      </Box>
      <Box display="flex">
        <EmailIcon />
        <p className={styles.ContactEmail}>{contact.email}</p>
      </Box>
      <Box display="flex">
        <PhoneIcon />
        <p className={styles.ContactPhone}>
          {contact.phone ? contact.phone : 'N/A'}
        </p>
      </Box>
      <span
        className={
          contact.contactType === 'Personal'
            ? styles.Personal
            : styles.Professional
        }
      >
        {contact.contactType}
      </span>
    </div>
  );
};

export default ContactItem;
