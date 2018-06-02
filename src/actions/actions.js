import actionTypes from './actionTypes';

export const startCtxUI = () => ({
  type: actionTypes.START
});

export const susResAudioCtx = () => ({
  type: actionTypes.TOGGLE_CTX_RUNNIG
});

export const closeCtxUI = () => ({
  type: actionTypes.CLOSE
});
