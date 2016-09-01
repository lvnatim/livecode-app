/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },

    first_name: {
      type: 'string',
      required: true
    },

    last_name: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      minLength: 6,
      required: true
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },


    //A new join table will be created to keep track of these relations(if using Watermark)
    //Because you may want a model to have multiple many-to-many associations on another model a via key
    //is needed to populate the records
    // documents: {
    //   collection: 'document',
    //   via: 'collaborators',
    //   dominant: true
    // }

    //If we want to use bcrypt
    // Lifecycle Callbacks
    // beforeCreate: function(values, next){
    //   bcrypt.hash(values.password, 10, function(err, hash){
    //     if (err) return next(err);
    //     values.password = hash;
    //     next();
    //   });
    // }
  }
};

