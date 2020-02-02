
var passport = require('passport');
var config = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/Users");

/**
 * @description route to registration
 */
router.post('/register', function(req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({success: false, msg: 'Please pass username and password.'});
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      // checks if user is first user
        User.countDocuments(function (err, count) {
            if(err){
                return res.json({success: false, msg: 'error while getting count.'});
            } 
            else {
            // if first user save role as admin
                if (count === 0) {
                    newUser.role = 'admin';
                    newUser.save(function(err) {
                        if (err) {
                        return res.status(200).json({success: false, msg: 'Username already exists 1.', error: err});
                        }
                        res.status(200).json({success: true, msg: 'Successful created new user.', error: null});
                    });
                }else{
                    // else save role as guest
                    newUser.role =  'guest';
                    newUser.save(function(err) {
                        if (err) {
                        return res.status(200).json({success: false, msg: 'Username already exists 2.'});
                        }
                        res.status(200).json({success: true, msg: 'Successful created new user.'});
                    });
                }
            }
    });
      
    }
});

/**
* @description route to login
*/
router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(200).json({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), config.secret);
                    // return the information including token as JSON
                    res.status(200).json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(200).json({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

/**
 * route towards logout
 */
router.post('/logout', passport.authenticate('jwt', { session: false}), function(req, res) {
    req.logout();
    res.status(200).json({success: true});
});

module.exports = router;