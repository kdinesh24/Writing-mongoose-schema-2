const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  commentedAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minlength: 5,
    required: true
  },
  content: {
    type: String,
    minlength: 50,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  category: {
    type: String,
    default: 'General'
  },
  likes: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  comments: [commentSchema]
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = { BlogPost, Comment };
