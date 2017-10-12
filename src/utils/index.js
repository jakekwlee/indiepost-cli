const moment = require('moment');
const { HOME_URL, CDN_URL } = require('../constants');
const api = require('../api');

const normalizeImage = (image) => {
  const { filePath, sizeType } = image;
  return {
    url: CDN_URL + filePath,
    sizeType,
  };
};

const normalizeImageSet = (imageSet, isTitleImage = false) => {
  const sizes = [];
  const { id, contentType, original, large, optimized, small, thumbnail } = imageSet;

  if (original)
    sizes.push(normalizeImage(original));
  if (large)
    sizes.push(normalizeImage(large));
  if (optimized)
    sizes.push(normalizeImage(optimized));
  if (small)
    sizes.push(normalizeImage(small));
  if (thumbnail)
    sizes.push(normalizeImage(thumbnail));

  return {
    imageId: id,
    isTitleImage,
    contentType,
    sizes,
  };
};

const simplifyPost = (post) => ({
  url: HOME_URL + '/post/' + post.id,
  title: post.title,
  publishAt: moment(post.publishedAt).format('YYYY/MM/DD HH:mm'),
});

module.exports = {
  simplifyPost,
  normalizeImageSet,
};
