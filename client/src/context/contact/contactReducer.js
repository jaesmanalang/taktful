import {
  CONTACTS_REQUEST,
  CREATE_CONTACT,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILED,
} from './contactTypes';

const contactReducer = (state, action) => {
  switch (action.type) {
    case CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    case GET_CONTACTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return state;
  }
};

export default contactReducer;
