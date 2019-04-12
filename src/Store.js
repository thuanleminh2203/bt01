import {FireBaseConn} from './FireBaseConn';
import {createStore} from 'redux';



const noteInitialState = {
    status : true,
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':

            FireBaseConn.push(action.note);
            return state
       
        default:
            return state
    }
}
const store = createStore(allReducer);

export default store;