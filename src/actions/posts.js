import { UPDATE_POSTS } from './actionTypes';
export function fetchPosts() {
  return function (dispatch) {
    let url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
    console.log(url, 'url');
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('data', data);
        dispatch(updatePosts(data.data.posts));
      })
      .catch((err) => console.log('failed to fetch', err));
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
