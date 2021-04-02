import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import contactReducer from './contactReducer';
import {
  CREATE_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './contactTypes';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const createContact = async contact => {
    const { data } = await axios.post('/api/v1/contacts/', {
      contact,
    });

    dispatch({ type: CREATE_CONTACT, payload: data.createdContact });
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
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
