import { APP_TITLE } from '../actions/actionTypes';

const AppReducer = (title = 'Home', action) => {
    switch (action.type) {
        case APP_TITLE: 
            return title;
        default: 
            return title;
    }
}

export default AppReducer;