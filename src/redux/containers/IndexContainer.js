/* Redux */
import { connect } from 'react-redux';

import { increaseAction, decreaseAction } from '../actions';

/* App Container */
import AppContainer from './AppContainer';

const mapStateToProps = (state) => ({
    times: state.IndexReducer ? state.IndexReducer : 0,
    appTitle: state.AppReducer ? state.AppReducer : '',

});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (step) => {
        dispatch(increaseAction(step));
    },
    onDecrement: (step) => {
        dispatch(decreaseAction(step));
    },
    changeTitleAction: (title) => {
        dispatch(decreaseAction(title));
    }
});

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default IndexContainer;