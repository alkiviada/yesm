import { 
  OFF_MAIN,
  CLEAR_OFF_MAIN,
  ON_MAIN
} from './types';

export const moveOffMain = () => dispatch => {
  dispatch({
    type: OFF_MAIN,
  })
};

export const clearOffMain = () => dispatch => {
  dispatch({
    type: CLEAR_OFF_MAIN,
  })
};

export const setOnMain = () => dispatch => {
  dispatch({
    type: ON_MAIN,
  })
};

