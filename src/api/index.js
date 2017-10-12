const req = require('superagent');
const { HOME_URL } = require('../constants');

const fetchScheduledPosts = () =>
  req.get(HOME_URL + '/api/posts/future')
    .then(res => res.body);

const fetchImagesOnPost = (postId) =>
  req.get(HOME_URL + '/api/posts/images/' + postId)
    .then(res => res.body);

module.exports = {
  fetchScheduledPosts,
  fetchImagesOnPost,
};
