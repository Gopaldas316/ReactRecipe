import {combineReducers} from 'redux';
import detailReducer from './detailReducer';

import dishReducer from './dishReducer';

const rootReducer = combineReducers({
    dishes : dishReducer,
    dishDetails : detailReducer,
});

export default rootReducer;
