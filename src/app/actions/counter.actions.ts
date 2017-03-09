import { Action } from '@ngrx/store'
import { actionType } from '../functions/action-type'

export const ActionTypes = {
  INCREMENT: actionType('COUNTER_INCREMENT'),
  DECREMENT: actionType('COUNTER_DECREMENT'),
  RESET: actionType('COUNTER_RESET')
}

export class Increment implements Action {
  type = ActionTypes.INCREMENT

  constructor (public payload: string) { }
}

export class Decrement implements Action {
  type = ActionTypes.DECREMENT

  constructor (public payload: string) { }
}

export class Reset implements Action {
  type = ActionTypes.RESET

  constructor (public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = Increment
  | Decrement
  | Reset
