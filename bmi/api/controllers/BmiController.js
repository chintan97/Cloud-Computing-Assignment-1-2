/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calculate089: function(req, res){
        if (req.body.weight089 && req.body.height089){
            var weight089 = req.body.weight089;   // parse weight value
            var height089 = req.body.height089;   // parse height value
            var bmi089 = weight089/ (height089 * height089);   // Calculate BMI = (weight) / (height*height)
            return res.ok(bmi089);   // Send calculated BMI value in response
        }
        else{
            res.status(500).send('Parameters are not valid!');
        }
    }

};

