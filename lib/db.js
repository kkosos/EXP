var mongoose = require('mongoose');
var Schema = mongoose.Schema;


	var expanda_account = new Schema({
		Username:String,
		passwd:String
	});



mongoose.model('expanda_account',expanda_account)
mongoose.connect('mongodb://localhost/expanda')