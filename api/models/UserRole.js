var mongoose = require('mongoose');

//user role schema
var UserRoleSchema = new mongoose.Schema({
  id: String,
  role: String
});

module.exports = mongoose.model('userRole', UserRoleSchema);