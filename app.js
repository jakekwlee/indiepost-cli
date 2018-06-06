#!/usr/bin/env node

const program = require('commander');
const { getImagesOnPost, getScheduledPosts } = require('./src/actions/index');

program
  .version('1.0.0')
  .description('Indiepost command-line interface')
  .usage('<option>')
  .option('future', 'get scheduled posts')
  .option('post-images <post-id>', 'get all images on specific post')
  .parse(process.argv);

if (program.future) {
  getScheduledPosts();
}

if (program.postImages) {
  getImagesOnPost(program.postImages);
}
