//redux/action.js

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

export const addBusiness = (business) => {
  console.log('why no biz')
  return {
    type: 'ADD_BUSINESS',
    payload: business,
  };
};
