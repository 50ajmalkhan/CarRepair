//import { increment } from "./../actions/index";
import { ADDUSER, REMOVEUSER } from "./../actions/actionTypes";
//defined reducer related to user
// can defined state like this also
// const initialstate = {

// }
// and asign like state=initialstate
const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADDUSER:
      return [...state, { name: action.payload }];
    case REMOVEUSER:
      return state.filter((item, index) => action.payload !== index);
    default:
      return state;
  }
};

export default userReducer;

//for counter and other functionality make new files like

// const countReducer = (state = 0, action) => {
//   switch (action.type) {
//     case incremnet:
//       return state + 1;
//     default:
//       return state;
//   }
// };

// export default countReducer;
