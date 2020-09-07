//import all action types from actionTypes.js
// * represent all types by alias action
import * as action from "./actionTypes";

//arrow function which return type object

export const addUser = (data) => {
  return {
    type: action.ADDUSER,
    payload: data,
  };
};

export const removeUser = (index) => {
  return {
    type: action.REMOVEUSER,
    payload: index,
  };
};

export const allServices = () => {
  return {
    type: action.AllSERVICES,
  };
};

export const saveAppointment = (data) => {
  return {
    type: action.SAVEAPPOINTMENT,
    payload: data,
  }
}

//without parameter like
// export const incremnet = () => {
//   return {
//     type: action.INCREMENT,
//   };
// };
