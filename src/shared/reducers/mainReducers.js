import { 
  ON_MAIN,
  OFF_MAIN,
  CLEAR_OFF_MAIN,
} from '../actions/types';

const initialState = {
  onMain: 0,
  offMain: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_MAIN: return { ...state, 
                           onMain: 1, offMain: 0 };
    case OFF_MAIN: return { ...state, 
                            offMain: 1, 
                            onMain: 0, };
    case CLEAR_OFF_MAIN: return { ...state, 
                            offMain: 0, 
                            onMain: 0, };
    default:
      return state;
  }
}

