import actionTypes from '../actions/actionTypes';
import { BUZZING, SUSPEND, RESUME, AUDIO_CONTEXT_CLOSED } from '../constants';

const initialState = {
  msg: ' - ',
  susResToggle: 'SUSPEND'
};

export default (state = initialState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case actionTypes.START:
      nextState.msg = BUZZING;
      break;
    case actionTypes.TOGGLE_CTX_RUNNING:
      nextState.susResToggle =
        nextState.susResToggle === SUSPEND ? RESUME : SUSPEND;
      break;
    case actionTypes.CLOSE:
      nextState.msg = AUDIO_CONTEXT_CLOSED;
      break;

    default:
      break;
  }

  return nextState;
};
