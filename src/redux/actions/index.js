import { 
    INCREMENT, 
    DECREMENT,
    APP_TITLE
} from './actionTypes';

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}

export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}

export const changeTitleAction = (title) => {
    return {
        type: APP_TITLE,
        title: title
    }
}