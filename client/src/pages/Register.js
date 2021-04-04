import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import AuthContext from '../context/auth/authContext';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const { register, handleSubmit, errors, reset, watch, setError } = useForm();
  const { state } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      const res = await axios.post('/api/v1/users/register', data);
      if (res.status === 201) {
        reset();
        history.push('/login');
      }
    } catch (error) {
      setError('email', {
        message: error.response.data.message,
      });
    }
  };

  return !state.user ? (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={register({
                  required: 'Please provide a first name',
                })}
                error={errors.firstName ? true : false}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                inputRef={register({
                  required: 'Please provide a last name',
                })}
                error={errors.lastName ? true : false}
                helperText={errors.lastName ? errors.lastName.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                inputRef={register({
                  required: 'Please provide an email address',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={register({
                  required: 'Please provide a password',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                inputRef={register({
                  required: 'Please confirm your password',
                  validate: value =>
                    value === watch('password') || 'Passwords do not match',
                })}
                error={errors.confirmPassword ? true : false}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword.message : ''
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  ) : (
    <Redirect to="/" />
  );
};

export default Register;
