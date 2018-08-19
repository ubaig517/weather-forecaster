import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // same as: state.concat([action.payload.data])
  }

  return state;
}


// a function runs within the scope of the object it sits in
// we never want to manipulate/mutate the state directly
