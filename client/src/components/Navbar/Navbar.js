import React, { useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NonAuthNav = () => (
  <Fragment>
    <Button color="inherit" component={Link} to={'/login'}>
      Login
    </Button>
    <Button color="inherit" component={Link} to={'/register'}>
      Register
    </Button>
  </Fragment>
);

const AuthNav = ({ user, logout }) => (
  <Fragment>
    <Typography style={{ margin: '0 10px' }}>Hi, {user.firstName}</Typography>
    <Button color="inherit" onClick={logout}>
      Logout
    </Button>
  </Fragment>
);

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT_USER' });
    history.push('/login');
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Taktful
          </Typography>
          {state.user ? (
            <AuthNav user={state.user} logout={logout} />
          ) : (
            <NonAuthNav />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
