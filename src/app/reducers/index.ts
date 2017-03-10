import { combineReducers, ActionReducer } from '@ngrx/store'
import { compose } from '@ngrx/core/compose'
import * as fromRouter from '@ngrx/router-store'
import { storeLogger } from 'ngrx-store-logger'

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromCounter from './counter.reducer'

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  counter: fromCounter.State
  router: fromRouter.RouterState
};

const reducers = {
  counter: fromCounter.reducer,
  router: fromRouter.routerReducer
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export function reducer (state: any, action: any) {
  let combinedRecucers: ActionReducer<State>

  if (process.env.ENV === 'production') {
    combinedRecucers = combineReducers(reducers)
  } else {
    combinedRecucers = compose(storeLogger(), combineReducers)(reducers)
  }

  return combinedRecucers(state, action)
}
