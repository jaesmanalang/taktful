import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import ContactContext from '../../context/contact/contactContext';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 0),
    padding: theme.spacing(2, 0, 2),
  },
}));

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  contactType: 'Personal',
};

const ContactForm = () => {
  const { createContact } = useContext(ContactContext);
  const { register, handleSubmit, errors, reset, control } = useForm({
    defaultValues,
  });

  const onSubmit = data => {
    createContact(data);
    reset();
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Add Contact</h1>
        <TextField
          variant="outlined"
          margin="normal"
          id="name"
          label="Name"
          name="name"
          fullWidth
          inputRef={register({
            required: 'Please provide a contact name',
          })}
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name.message : ''}
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="email"
          label="Email Address"
          type="email"
          id="email"
          fullWidth
          inputRef={register({
            required: 'Please provide an email address',
          })}
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="phone"
          label="Phone"
          type="text"
          id="phone"
          fullWidth
          inputRef={register}
        />
        <h3>Contact Type</h3>
        <Controller
          as={
            <RadioGroup row>
              <FormControlLabel
                value="Personal"
                control={<Radio />}
                label="Personal"
              />

              <FormControlLabel
                value="Professional"
                control={<Radio />}
                label="Professional"
              />
            </RadioGroup>
          }
          name="contactType"
          control={control}
        />

        <Button
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </form>
    </Grid>
  );
};

export default ContactForm;
