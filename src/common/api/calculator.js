import { combineReducers } from 'redux';

import constraints from './constraints';
import loan from './loan';
import form from './form';

export default combineReducers({
    form,
    constraints,
    loan
});
