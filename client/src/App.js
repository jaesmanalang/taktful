import React from 'react';
import { ContactProvider } from './context/contact/contactContext';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/Contact/ContactForm';
import ContactList from './components/Contact/ContactList';
import './App.css';

const App = () => {
  return (
    <ContactProvider>
      <Navbar />
      <div className="container">
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;
