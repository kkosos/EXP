var mongoose = require('mongoose');
var Schema = mongoose.Schema;

	var expanda_account = new Schema({
		username:String,
		passwd:String
	});
	

	var relationship = new Schema({
		host:String,
		guset:String
	});


	var Article= new Schema({
		username:String,
		Context:String
	});


mongoose.model('relationship',relationship)
mongoose.model('expanda_account',expanda_account)
mongoose.model('Article',Article)
mongoose.connect('mongodb://localhost/expanda');