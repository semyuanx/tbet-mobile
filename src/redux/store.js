import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

// var s = window.devToolsExtension?window.devToolsExtension():null;
const store = createStore(reducers,compose(
    applyMiddleware(thunk)
));

export default store;
