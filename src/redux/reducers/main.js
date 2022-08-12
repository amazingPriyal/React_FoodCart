import { combineReducers } from 'redux';
import {cartreducer} from './reducer';

const rootRed = combineReducers ({
    cartreducer
});

export default rootRed;