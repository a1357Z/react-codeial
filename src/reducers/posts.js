import { UPDATE_POSTS } from '../actions/actionTypes';

let initialState = {
  posts: [],
};
export default function posts(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return { ...state, posts: action.posts };
      break;

    default:
      break;
  }
  return state;
}
