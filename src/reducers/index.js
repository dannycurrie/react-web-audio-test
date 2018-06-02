import { combineReducers } from 'redux';
import { webAudioReducer } from 'react-redux-webaudio';

import uiReducer from './uiReducer';

export default combineReducers({
  webAudioReducer,
  uiReducer
});
