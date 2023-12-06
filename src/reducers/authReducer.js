const initialState = {
    user: null,
    isAuthenticating: false,
    error: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_START':
        return {
          ...state,
          isAuthenticating: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticating: false,
          user: action.payload.user,
          token: action.payload.token,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticating: false,
          error: action.payload,
          user: null,
          token: null,
        };
      // Добавьте другие case для других действий (например, LOGOUT)
      default:
        return state;
    }
  };
  
  export default authReducer;
  