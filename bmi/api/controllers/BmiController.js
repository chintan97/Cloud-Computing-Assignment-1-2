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
            var bmi089;
            if (weight089 <= 0){   // Weight can not be less than or equal to zero
                bmi089 = "Weight not valid!";  
            }
            else if (height089 <= 0){   // Height can not be less than or equal to zero
                bmi089 = "Height not valid!";
            }
            else if (weight089 > 0 && height089 > 0){
                bmi089 = weight089/ (height089 * height089);   // Calculate BMI = (weight) / (height*height)
            }
            else{   // Any other cases like if string is passed
                bmi089 = "Values not valid!";
            }
            return res.ok(bmi089);   // Send calculated BMI value in response
        }
        else{
            return res.ok("Something wrong with JSON parameters!");
        }
    }

};

