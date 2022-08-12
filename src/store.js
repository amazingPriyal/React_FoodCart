import {createStore,applyMiddleware} from 'redux';
// import {cartreducer} from './redux/reducers';
import rootRed from './redux/reducers/main';
import _ from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [_]

const store = createStore (
    rootRed,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store;