import {
	combineReducers
} from 'redux';
// Put all your reducers here.
import example from './example';
import main from './main'

export default combineReducers({
	example,
	main
});
