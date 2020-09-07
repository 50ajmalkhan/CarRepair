
import { SAVEAPPOINTMENT } from './../actions/actionTypes';
import { axios } from 'axios';


const AppointmentReducer = (state = 0, action) => {
    switch (action.type) {
        case SAVEAPPOINTMENT:
            return "hello";

        default:
            return state;

    }
}

export default AppointmentReducer;