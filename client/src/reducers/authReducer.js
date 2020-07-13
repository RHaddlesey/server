import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

// this action creator will return 3 different states - null (while it is getting the data) - the user model if logged in - false if the user model is empty (logged out)
