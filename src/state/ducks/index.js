import { combineReducers } from 'redux';
import { default as news } from './news';
import { default as auth } from './auth';
import { default as profile } from './profile';
import { default as globalError } from './globalError';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
  news,
  auth,
  profile,
  globalError,
  form: formReducer
});