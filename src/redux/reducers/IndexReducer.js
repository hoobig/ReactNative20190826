import { INCREMENT, DECREMENT } from '../actions/actionTypes';

const IndexReducer = (times = 0, action) => {
    switch (action.type) {
        case INCREMENT: 
            return ++times;
        case DECREMENT: 
            return --times;
        default: 
            return times;
    }
}

export default IndexReducer;