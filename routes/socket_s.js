const fs = require('fs');
exports = module.exports =function(io){
	
		io.on( "connection", function( socket )
		{
			console.log( "A user connected" );

			socket.on ('disconnect', function(){console.log('user disconnected');});
	
			socket.on('chat message', function(data){ 
													console.log('message: ' + data.name + data.msg);
												   var d=new Date();
												   var time = "@" +d.getHours()+ ":" + d.getMinutes() + ":" + d.getSeconds();
												
												   io.emit('chat message', {name:data.name, msg:data.msg, time:time});

												   });

		    socket.on('image choose', function(data){
				var d=new Date();
				var time = "@" +d.getHours()+ ":" + d.getMinutes() + ":" + d.getSeconds();
				var file_name;
				switch(data.msg){
					case "img1": file_name="01.png";break;
					case "img2": file_name="02.png";break;
					default:break;
				}
				
				fs.readFile('./public/images/'+file_name, function (err, buf) {
					if (err) throw err;
					io.emit('image show', {name:data.name,image:true,buffer:buf.toString('base64'),time:time});
				});
				
				
				/*
				if(msg=="img1"){
					fs.readFile('./public/images/01.png', function (err, buf) {
					if (err) throw err;
					io.emit('image show', {image:true,buffer:buf.toString('base64')});
					});
				}
				else{
					fs.readFile('./public/images/02.png', function (err, buf) {
					if (err) throw err;
					io.emit('image show', {image:true,buffer:buf.toString('base64')});
					});
				
				}*/
			
			});
		
		
		});

}