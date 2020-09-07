import userReducer from "./UserReducer";
import { combineReducers } from "redux";
import ServiceReducer from "./serviceReducer";
import AppointmentReducer from './appointmentReducer';
const allReducer = combineReducers({
  userReducer,
  ServiceReducer,
  AppointmentReducer,
  // write all imported reducers here
});

export default allReducer;
