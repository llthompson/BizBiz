
export const removeRow = (index) => {
  console.log('is it in actions', index)
  return {
    type: 'REMOVE_ROW',
    value: index
  }
}

export const loginUser = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: {
      username,
      password,
    },
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};