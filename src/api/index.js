const req = require('superagent');
const { API_URL } = require('../constants');

const fetchScheduledPosts = () =>
  req.get(API_URL + '/posts/future')
    .then(res => res.body);

const fetchImagesOnPost = (postId) =>
  req.get(API_URL + '/posts/images/' + postId)
    .then(res => res.body);

module.exports = {
  fetchScheduledPosts,
  fetchImagesOnPost,
};
