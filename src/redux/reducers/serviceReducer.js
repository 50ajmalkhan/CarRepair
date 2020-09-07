import { AllSERVICES } from "../actions/actionTypes";
import axios from "axios";
import service from "../../data/service.json";
// const initialState = async () => {
//   const result = await axios.get("http://localhost:3003/services");

//   return result.data;
// };

const ServiceReducer = (state = service, action) => {
  switch (action.type) {
    case AllSERVICES:
      let services = state;
      return services;
    default:
      return state;
  }
};

export default ServiceReducer;
