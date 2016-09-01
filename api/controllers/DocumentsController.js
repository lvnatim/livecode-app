/**
 * DocumentsController
 *
 * @description :: Server-side logic for managing documents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  create: function(req, res) {
    Document.create(req.body).done(function(err, doc){
      res.end(JSON.stringify(doc));
    });
  },

  update: function(req, res){
    Document.update(req.body).done(function(err, doc){
      res.end(JSON.stringify(doc))
    });
  },

  destroy: function(req, res){
    Document.destroy(req, body).done(function(err){
      if(err){
        res.end("Error: " + err);
      } else {
        res.end("Document destroyed");
      }
    });
  }
  
};

