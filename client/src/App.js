import React from 'react';
import { ContactProvider } from './context/contact/contactContext';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <React.Fragment>
      <ContactProvider>
        <h1>App</h1>
        <hr />
        <ContactList />
      </ContactProvider>
    </React.Fragment>
  );
};

export default App;
