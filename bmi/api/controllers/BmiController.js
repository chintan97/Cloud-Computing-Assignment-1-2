/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calculate089: function(req, res){
      var weight089 = req.body.weight089;
      var height089 = req.body.height089;

      var bmi089 = weight089/ (height089 * height089); 

      res.view('pages/homepage', {bmi089: bmi089, weight089: weight089, height089: height089});
  }

};

