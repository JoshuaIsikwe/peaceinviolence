const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: {
    type: 'String',
    require: true,
  },
  title: {
    type: 'String',
    require: true,
  },
  description: {
    type: 'String',
    require: true,
  },
  postedAt: {
    type: 'date',
    default: Date.now,
  },
  updatedAt: {
    type: 'date',
    default: Date.now,
  },
});
const postModel = mongoose.model('Posts', postSchema);
module.exports = postModel
