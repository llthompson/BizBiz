const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
  return {
    type: 'ADD_CAR',
    value: car
  }
}

export const removeCar = (index) => {
  return {
    type: 'REMOVE_CAR',
    value: index
  }
}

export const fetchMakesSuccess = (makes) => ({
  type: 'FETCH_MAKES_SUCCESS',
  value: makes,
});



export const fetchMakes = () => {
  return (dispatch) => {
      fetch(url)
          .then(res => res.json())
          .then(response => {
              console.log('what the h');
              dispatch(fetchMakesSuccess(response.Results));
          })
          .catch(error => {
              console.error('Error fetching makes:', error);
          });
  };
};

export const DELETE_MAKE = 'DELETE_MAKE';

export const deleteMake = (index) => {
  return {
      type: DELETE_MAKE,
      value: index
      }
  };
