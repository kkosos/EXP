var mongoose = require('mongoose');
var Schema = mongoose.Schema;

	var expanda_account = new Schema({
		username:String,
		passwd:String
	});
	

	var relationship = new Schema({
		host:String,
		guest:String
	});


	var Article= new Schema({
		username:String,
		Context:String
	});

	
	var friend_list= new Schema({
		host:String,
		friend:String
	});

mongoose.model('friend_list',friend_list)
mongoose.model('relationship',relationship)
mongoose.model('expanda_account',expanda_account)
mongoose.model('Article',Article)
mongoose.connect('mongodb://localhost/expanda');