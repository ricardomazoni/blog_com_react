import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'

/**
 * formReducer - Comunica com o redutor adicional
 */
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;