/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 
    create: function(req, res) {
    User.create(req.body).done(function(err, user){
      res.end(JSON.stringify(user));
    });
  },

  destroy: function(req, res){
    User.destroy(req, body).done(function(err){
      if(err){
        res.end("Error: " + err);
      } else {
        res.end("User destroyed");
      }
    });
  },

  index: function(req, res){
    console.log("Looking for index.ejs");
    User.find(function(err, users){
      console.log(JSON.stringify(users));
      res.view({
        users: users
      });
    });
  }


};

