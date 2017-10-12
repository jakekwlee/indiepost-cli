const prettyjson = require('prettyjson');
const { normalizeImageSet, simplifyPost } = require('../utils');
const api = require('../api');

const getScheduledPosts = () =>
  api.fetchScheduledPosts()
    .then(res => {
      const result = res.map(post => simplifyPost(post));
      console.log(prettyjson.render(result));
    })
    .catch(error => {
      console.log(error)
    });

const getImagesOnPost = (postId) =>
  api.fetchImagesOnPost(postId)
    .then(res => {
      const { titleImage, images } = res;
      const result = images.map(image => normalizeImageSet(image));
      result.unshift(normalizeImageSet(titleImage, true));
      console.log(prettyjson.render(result));
    })
    .catch(error => {
      console.log(error);
    });

module.exports = {
  getImagesOnPost,
  getScheduledPosts,
};
