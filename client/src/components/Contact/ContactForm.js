import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import ContactContext from '../../context/contact/contactContext';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(3, 0, 2),
  },
}));

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  contactType: 'personal',
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        margin="normal"
        id="name"
        label="Name"
        name="name"
        fullWidth
        inputRef={register({
          required: 'Please provide a contact name',
          validate: {},
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
        inputRef={register}
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

      <Controller
        as={
          <RadioGroup>
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label="Personal"
            />

            <FormControlLabel
              value="professional"
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
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;
