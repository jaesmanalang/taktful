import Grid from '@material-ui/core/Grid';
import React from 'react';

const ContactContainer = ({ children }) => {
  return (
    <div className="container">
      <Grid container spacing={2}>
        {children}
      </Grid>
    </div>
  );
};

export default ContactContainer;
