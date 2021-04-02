import React from 'react';
import { ContactProvider } from './context/contact/contactContext';
import Navbar from './components/Navbar/Navbar';
import ContactContainer from './components/Contact/ContactContainer';
import ContactForm from './components/Contact/ContactForm';
import ContactList from './components/Contact/ContactList';
import './App.css';

const App = () => {
  return (
    <ContactProvider>
      <Navbar />
      <ContactContainer>
        <ContactForm />
        <ContactList />
      </ContactContainer>
    </ContactProvider>
  );
};

export default App;
