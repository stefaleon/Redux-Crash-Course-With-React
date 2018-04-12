import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://jsonplaceholder.typicode.com/posts';

  fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
 };
