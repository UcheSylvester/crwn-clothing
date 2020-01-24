// Actions indicate the user actions
// here we are passing in the user, and returning 
// type as SET_CURRENT_USER and the user as the payload

// the type is what will alert the related reducer to process the action

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
})