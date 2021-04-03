import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthContext from './context/auth/authContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => (state.user ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          exact
          path="/register"
          render={() => (state.user ? <Redirect to="/" /> : <Register />)}
        />
      </Switch>
    </Router>
  );
};

export default App;
