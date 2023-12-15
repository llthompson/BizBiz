
export const removeRow = (index) => {
  return {
    type: 'REMOVE_ROW',
    value: index
  }
}

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
