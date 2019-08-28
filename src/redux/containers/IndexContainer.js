/* Redux */
import { connect } from 'react-redux';
/* Component */
import IndexComponent from '../../components/index/IndexComponent';

import { increaseAction, decreaseAction } from '../actions';

const mapStateToProps = (state) => {
    return {
        times: state.IndexReducer ? state.IndexReducer : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (step) => {
            dispatch(increaseAction(step));
        },
        onDecrement: (step) => {
            dispatch(decreaseAction(step));
        }
    }
};

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(IndexComponent);
export default IndexContainer;