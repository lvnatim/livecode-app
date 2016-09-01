/**
 * Documents.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    content: {
      type: 'string',
      required: true
    },

    //set up on initial insert?
    owner_id: {
      type: 'integer',
      required: true
    }, 


    language: {
      type: 'string',
      required: true
    },

    //adding a reference to User
    collaborators: {
      collection: 'user',
      via: 'documents'
    }
  }
};

