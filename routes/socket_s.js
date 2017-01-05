const fs = require('fs');
exports = module.exports =function(io){
	
		io.on( "connection", function( socket )
		{
			console.log( "A user connected" );

			socket.on ('disconnect', function(){console.log('user disconnected');});
	
			socket.on('chat message', function(msg){ console.log('message: ' + msg);
												   
												   io.emit('chat message', msg);

												   });

		    socket.on('image choose', function(msg){
				
				console.log('img number: ' + msg);
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
				
				}
			
			});
		
		
		});

}