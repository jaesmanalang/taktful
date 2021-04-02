import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import contactReducer from './contactReducer';
import { CREATE_CONTACT, GET_CONTACTS } from './contactTypes';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    fetchContacts();
  }, []);

  const createContact = async contact => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/contacts/',
        contact
      );

      dispatch({ type: CREATE_CONTACT, payload: res.data.contact });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchContacts = async () => {
    const { data } = await axios.get('/api/v1/contacts/');
    dispatch({ type: GET_CONTACTS, payload: data.contacts });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        loading: state.loading,
        error: state.error,
        createContact,
        fetchContacts,
        dispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
