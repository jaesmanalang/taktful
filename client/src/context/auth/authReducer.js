const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'LOGIN_SUCCESS':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case 'LOGIN_FAILED':
      localStorage.clear();
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };

    case 'LOGOUT_USER':
      localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
