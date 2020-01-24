/***
   Set the INITIAL_STATE with no current user
  once action is triggered, say sign in, the reducer 
  recieves the action and returns the signed in user
  as the current user provided the type of the action is
  SET_CURRENT_USER
 */


const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }

}

export default userReducer