/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  calculate: function(req, res){
      var weight = req.body.weight;
      var height = req.body.height;

      var bmi = weight/ (height * height); 

      res.view('pages/homepage', {bmi: bmi, weight: weight, height: height});
  }

};

