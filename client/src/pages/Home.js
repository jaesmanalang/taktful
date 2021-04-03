import React from 'react';
import { ContactProvider } from '../context/contact/contactContext';
import ContactContainer from '../components/Contact/ContactContainer';
import ContactForm from '../components/Contact/ContactForm';
import ContactList from '../components/Contact/ContactList';

const Home = () => {
  return (
    <ContactProvider>
      <ContactContainer>
        <ContactForm />
        <ContactList />
      </ContactContainer>
    </ContactProvider>
  );
};

export default Home;
