'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Member Schema
 */
var MemberSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Member name',
    trim: true
  },
  course: {
    type: String,
    default: '',
    required: 'Please fill the course they are taking',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill Member email',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    required: 'Please fill Member phone number',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Member', MemberSchema);
