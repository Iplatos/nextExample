import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

const State = {
  tick: ""
}

// create your reducer
const reducer = (state: typeof State = {tick: 'init'}, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return {...state, ...action.payload};
    case 'TICK':
      return {...state, tick: action.payload};
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<typeof State>>(makeStore, {debug: true});
