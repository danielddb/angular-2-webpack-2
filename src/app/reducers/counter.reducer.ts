import * as counter from '../actions/counter.actions';

export interface State {
  count: number
};

export const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: counter.Actions): State {
    switch (action.type) {
        case counter.ActionTypes.INCREMENT:
            return Object.assign({}, state, { count: state.count + 1 });

        case counter.ActionTypes.DECREMENT:
            return Object.assign({}, state, { count: state.count - 1 });

        case counter.ActionTypes.RESET:
            return Object.assign({}, state, { count: 0 });

        default:
            return state;
    }
}