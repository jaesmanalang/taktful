import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import contactReducer from './contactReducer';
import {
  CONTACTS_REQUEST,
  CREATE_CONTACT,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILED,
} from './contactTypes';

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
    console.log(contact);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    try {
      dispatch({ type: CONTACTS_REQUEST });
      const res = await axios.post('/api/v1/contacts/', contact, config);

      dispatch({ type: CREATE_CONTACT, payload: res.data.contact });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: GET_CONTACTS_FAILED,
        payload: error.response.data.message,
      });
    }
  };

  const fetchContacts = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    try {
      dispatch({ type: CONTACTS_REQUEST });
      const { data } = await axios.get('/api/v1/contacts/', config);
      dispatch({ type: GET_CONTACTS_SUCCESS, payload: data.contacts });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: GET_CONTACTS_FAILED,
        payload: error.response.data.message,
      });
    }
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
