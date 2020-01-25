// Actions indicate the user actions
// here we are passing in the user, and returning 
// type as SET_CURRENT_USER and the user as the payload

// the type is what will alert the related reducer to process the action

import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})