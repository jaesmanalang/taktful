import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <div>
      <h1>{contact.name}</h1>
    </div>
  );
};

export default ContactItem;
