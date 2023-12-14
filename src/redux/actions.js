
export const removeRow = (index) => {
  console.log('is it in actions', index)
  return {
    type: 'REMOVE_ROW',
    value: index
  }
}

export const loginSuccess = () => {
  console.log('action')
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
