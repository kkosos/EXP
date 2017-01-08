function load_level(){
	var lev_color;
	switch(level){
		case 0:
			//spawn_buff(true,2);
			lev_color = "#FF0000";
			enemies[enemies.length] = {x: 300, y: 25, w: 20, dx: -3, dy: 1, t: 0, speed: 2, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 100, y: 25, w: 20, dx: 3, dy: 1, t: 0, speed: 2, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 275, y: 50, w: 20, dx: -2, dy: 1, t: 0, speed: 3, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 125, y: 50, w: 20, dx: 2, dy: 1, t: 0, speed: 3, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 250, y: 75, w: 20, dx: -1, dy: 1, t: 0, speed: 4, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 150, y: 75, w: 20, dx: 1, dy: 1, t: 0, speed: 4, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			level_text = "2";
			break
		case 1:
			lev_color = "#FF8800";
			enemies[enemies.length] = {x: 280, y: 25, w: 20, dx: -3, dy: 1, t: 0, speed: 2, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 120, y: 25, w: 20, dx: 3, dy: 1, t: 0, speed: 2, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 300, y: 20, w: 20, dx: 0, dy: 3, t: 0, speed: 3, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: -50, bullet: 2};
			enemies[enemies.length] = {x: 100, y: 20, w: 20, dx: 0, dy: 3, t: 0, speed: 3, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: -50, bullet: 2};
			enemies[enemies.length] = {x: 250, y: 75, w: 20, dx: -1, dy: 1, t: 0, speed: 4, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0, bullet: 3};
			enemies[enemies.length] = {x: 150, y: 75, w: 20, dx: 1, dy: 1, t: 0, speed: 4, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0, bullet: 3};
			level_text = "3";
			break
		case 2:
			lev_color = "#FFFF00";
			enemies[enemies.length] = {x: 250, y: 30, w: 20, dx: 1, dy: 2, t: 3, speed: 3, color: lev_color, blood: 2,
				x_upper_limit: 500, x_lower_limit: -100, y_upper_limit: 550, y_lower_limit: -50, bullet: 2};
			enemies[enemies.length] = {x: 150, y: 30, w: 20, dx: -1, dy: 2, t: 3, speed: 3, color: lev_color, blood: 2,
				x_upper_limit: 500, x_lower_limit: -100, y_upper_limit: 550, y_lower_limit: -50, bullet: 2};
			level_text = "4";
			break
		case 3:
			lev_color = "#00FF00";
			enemies[enemies.length] = {x: 300, y: 25, w: 20, dx: 1, dy: 1, t: 0, speed: 2, color: lev_color,
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 200, y_lower_limit: 0, bullet: 3};
			enemies[enemies.length] = {x: 100, y: 25, w: 20, dx: -1, dy: 1, t: 0, speed: 2, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 200, y_lower_limit: 0, bullet: 3};
			enemies[enemies.length] = {x: 325, y: 25, w: 16, dx: -3, dy: 2, t: 3, speed: 3, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 250, y_upper_limit: 600, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 75, y: 25, w: 16, dx: 3, dy:2, t: 3, speed: 3, color: lev_color, blood: 1,
				x_upper_limit: 150, x_lower_limit: 0, y_upper_limit: 600, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 325, y: 25, w: 16, dx: 3, dy: 2, t: 3, speed: 2, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 250, y_upper_limit: 600, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 75, y: 25, w: 16, dx: -3, dy: 2, t: 3, speed: 2, color: lev_color, blood: 1,
				x_upper_limit: 150, x_lower_limit: 0, y_upper_limit: 600, y_lower_limit: 0, bullet: 1};
			level_text = "5";
			break;
		case 4:
			spawn_buff(true,1);
			lev_color = "#00FFFF";
			enemies[enemies.length] = {x: 380, y: 20, w: 12, dx: -1, dy: 1, t: 3, speed: 2, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 20, y: 20, w: 12, dx: 1, dy: 1, t: 3, speed: 2, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 380, y: 580, w: 12, dx: -1, dy: -1, t: 3, speed: 2, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 600, y_lower_limit: 200, bullet: 1};
			enemies[enemies.length] = {x: 20, y: 580, w: 12, dx: 1, dy: -1, t: 3, speed: 2, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 600, y_lower_limit: 200, bullet: 1};
			enemies[enemies.length] = {x: 380, y: 20, w: 12, dx: 0, dy: 1, t: 3, speed: 4, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 650, y_lower_limit: -50, bullet: 2};
			enemies[enemies.length] = {x: 20, y: 20, w: 12, dx: 0, dy: 1, t: 3, speed: 4, color: lev_color, blood: 1,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 650, y_lower_limit: -50, bullet: 2};
			enemies[enemies.length] = {x: 20, y: 50, w: 24, dx: 2, dy: 0, t: 3, speed: 4, color: lev_color, blood: 10,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 650, y_lower_limit: -50, bullet: 2};
			level_text = "6";
			break;
		case 5:
			lev_color = "#0000FF";
			enemies[enemies.length] = {x: 200, y: 150, w: 20, dx: 0, dy: 0, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 150, y_upper_limit: 200, y_lower_limit: 100, bullet: 2};
			enemies[enemies.length] = {x: 175, y: 125, w: 20, dx: 0, dy: 0, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 225, x_lower_limit: 125, y_upper_limit: 175, y_lower_limit: 75, bullet: 3};
			enemies[enemies.length] = {x: 225, y: 125, w: 20, dx: 0, dy: 0, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 275, x_lower_limit: 175, y_upper_limit: 175, y_lower_limit: 75, bullet: 3};
			enemies[enemies.length] = {x: 200, y: 100, w: 20, dx: 0, dy: 0, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 250, x_lower_limit: 150, y_upper_limit: 150, y_lower_limit: 50, bullet: 2};
			enemies[enemies.length] = {x: 100, y: 100, w: 20, dx: -1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 150, x_lower_limit: 50, y_upper_limit: 150, y_lower_limit: 50, bullet: 1};
			enemies[enemies.length] = {x: 75, y: 75, w: 20, dx: -1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 125, x_lower_limit: 25, y_upper_limit: 125, y_lower_limit: 25, bullet: 1};
			enemies[enemies.length] = {x: 125, y: 75, w: 20, dx: -1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 175, x_lower_limit: 75, y_upper_limit: 125, y_lower_limit: 25, bullet: 1};
			enemies[enemies.length] = {x: 100, y: 50, w: 20, dx: -1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 150, x_lower_limit: 50, y_upper_limit: 100, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 300, y: 100, w: 20, dx: 1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 350, x_lower_limit: 250, y_upper_limit: 150, y_lower_limit: 50, bullet: 1};
			enemies[enemies.length] = {x: 275, y: 75, w: 20, dx: 1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 325, x_lower_limit: 225, y_upper_limit: 125, y_lower_limit: 25, bullet: 1};
			enemies[enemies.length] = {x: 325, y: 75, w: 20, dx: 1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 375, x_lower_limit: 275, y_upper_limit: 125, y_lower_limit: 25, bullet: 1};
			enemies[enemies.length] = {x: 300, y: 50, w: 20, dx: 1, dy: -1, t: 0, speed: 5, color: lev_color,
				x_upper_limit: 350, x_lower_limit: 250, y_upper_limit: 100, y_lower_limit: 0, bullet: 1};
			level_text = "7";
			break
		case 6:
			lev_color = "#7700FF";
			enemies[enemies.length] = {x: 50, y: 50, w: 12, dx: 3, dy: -5, t: 1, speed: 4, color: lev_color, blood: 2,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			enemies[enemies.length] = {x: 350, y: 50, w: 12, dx: -3, dy: -5, t: 1, speed: 4, color: lev_color, blood: 2,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			enemies[enemies.length] = {x: 75, y: 75, w: 12, dx: 3, dy: -5, t: 1, speed: 4, color: lev_color, blood: 2,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			enemies[enemies.length] = {x: 325, y: 75, w: 12, dx: -3, dy: -5, t: 1, speed: 4, color: lev_color, blood: 2,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 100, w: 12, dx: 3, dy: -5, t: 1, speed: 4, color: lev_color, blood: 2,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			enemies[enemies.length] = {x: 300, y: 100, w: 12, dx: -3, dy: -5, t: 1, speed: 4, color: lev_color, blood: 2,
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			for(i = 0; i<5; i++)
				enemies[enemies.length] = {x: 100+50*i, y: 250, w: 12, dx: 0, dy: -5, t: 1, speed: 4, color: lev_color, blood: 1,
					x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 400, y_lower_limit: 0};
			level_text = "Final";
			break
		case 7:
			spawn_buff(true,Math.floor(Math.random() * 2)+1);
			between_level_refresh_status();
			enemies[enemies.length] = {x: 200, y: 50, w: 10, dx: 1, dy: 0, t: 2, speed: 2, color: "#FF3333", blood: 20,
				x_upper_limit: 350, x_lower_limit: 50, y_upper_limit: 500, y_lower_limit: 0, inv: false};//5555ff
				level_text = "Ready";
			break;
		default:
			var type = Math.floor(Math.random() * 4);
			var x_speed = Math.floor(Math.random() * 5);
			var y_speed = Math.floor(Math.random() * 5);
				switch(type){
					case 0:
						for(i = 3; i<400; i+=40){
						var bullet_type = Math.floor(Math.random() * 3);
						enemies[enemies.length] = {x: i, y: 25, w: 12, dx: (-1*x_speed), dy: y_speed, t: 3, speed: 3, color: "#ff0000", blood: 1,
							x_upper_limit: 450, x_lower_limit: -50, y_upper_limit: 550, y_lower_limit: 0, bullet: bullet_type+1};
						enemies[enemies.length] = {x: i+5, y: 40, w: 12, dx: x_speed, dy: -1*y_speed, t: 3, speed: 3, color: "#ff0000", blood: 1,
							x_upper_limit: 450, x_lower_limit: -50, y_upper_limit: 550, y_lower_limit: 0, bullet: bullet_type+1};
						}
						break;
					case 1:
						for(i = 3; i<389; i+=40){
						var bullet_type = Math.floor(Math.random() * 2);
						enemies[enemies.length] = {x: i, y: 25, w: 20, dx: (-1*x_speed), dy: y_speed, t: 0, speed: 3, color: "#ff0000",
							x_upper_limit: 450, x_lower_limit: -50, y_upper_limit: 550, y_lower_limit: 0, bullet: bullet_type+1};
						enemies[enemies.length] = {x: i+5, y: 40, w: 20, dx: x_speed, dy: -1*y_speed, t: 0, speed: 3, color: "#ff0000",
							x_upper_limit: 450, x_lower_limit: -50, y_upper_limit: 550, y_lower_limit: 0, bullet: bullet_type+1};
						}
						break;
					case 2:
						for(i = 3; i<400; i+=40){
						enemies[enemies.length] = {x: i, y: 25, w: 12, dx: (-1*x_speed), dy: y_speed, t: 1, speed: 3, color: "#ff0000", blood: 1,
							x_upper_limit: 450, x_lower_limit: -50, y_upper_limit: 550, y_lower_limit: 0};
						enemies[enemies.length] = {x: i+5, y: 40, w: 12, dx: x_speed, dy: -1*y_speed, t: 1, speed: 3, color: "#ff0000", blood: 1,
							x_upper_limit: 450, x_lower_limit: -50, y_upper_limit: 550, y_lower_limit: 0};
						}
						break;
					default:
						enemies[enemies.length] = {x: 200, y: 50, w: 10, dx: 1, dy: 0, t: 2, speed: 2, color: "#FF3333", blood: 20,
							x_upper_limit: 350, x_lower_limit: 50, y_upper_limit: 500, y_lower_limit: 0, inv: false};//5555ff
						break;
			}
			break;
	}
	level ++;
}
/*
function load_level(){
	switch(level){
		case 0:
			//spawn_buff(true,2);
			enemies[enemies.length] = {x: 300, y: 25, w: 20, dx: -3, dy: 1, t: 0, speed: 2, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 100, y: 25, w: 20, dx: 3, dy: 1, t: 0, speed: 2, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 275, y: 50, w: 20, dx: -2, dy: 1, t: 0, speed: 3, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 125, y: 50, w: 20, dx: 2, dy: 1, t: 0, speed: 3, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 250, y: 75, w: 20, dx: -1, dy: 1, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0, bullet: 1};
			enemies[enemies.length] = {x: 150, y: 75, w: 20, dx: 1, dy: 1, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0, bullet: 1};
			level_text = "1-2";
			break
		case 1:
			enemies[enemies.length] = {x: 300, y: 50, w: 20, dx: -3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 50, w: 20, dx: 3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 100, w: 20, dx: -2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 100, w: 20, dx: 2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 250, y: 150, w: 20, dx: -1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 300, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 150, w: 20, dx: 1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 300, y_lower_limit: 0};
			level_text = "1-3";
			break
		case 2:
			enemies[enemies.length] = {x: 300, y: 50, w: 20, dx: -3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 50, w: 20, dx: 3, dy: 1, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 100, w: 20, dx: -2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 100, w: 20, dx: 2, dy: 2, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 250, y: 150, w: 20, dx: -1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 150, w: 20, dx: 1, dy: 3, t: 0, speed: 4, color: "#ff2222",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 550, y_lower_limit: 50};
			enemies[enemies.length] = {x: 250, y: 150, w: 10, dx: 0, dy: 3, t: 1, speed: 4, color: "#22ffff",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 150, y: 150, w: 10, dx: 0, dy: 3, t: 1, speed: 4, color: "#22ffff",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 550, y_lower_limit: 50};
			level_text = "1-4";
			break
		case 3:
			spawn_buff(true,1);
			enemies[enemies.length] = {x: 300, y: 25, w: 20, dx: -3, dy: 1, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 200, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 25, w: 20, dx: 3, dy: 1, t: 0, speed: 4, color: "#22ff22",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 200, y_lower_limit: 0};
			enemies[enemies.length] = {x: 300, y: 50, w: 16, dx: -3, dy: 1, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 100, y: 50, w: 16, dx: 3, dy: 1, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 275, y: 100, w: 16, dx: -2, dy: 2, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 400, x_lower_limit: 150, y_upper_limit: 500, y_lower_limit: 0};
			enemies[enemies.length] = {x: 125, y: 100, w: 16, dx: 2, dy: 2, t: 3, speed: 4, color: "#22ffff",
				x_upper_limit: 250, x_lower_limit: 0, y_upper_limit: 500, y_lower_limit: 0};
			level_text = "1-5";
			break;
		case 4:
			for(i=1; i<40; i+=2.5){
				Bullets[1][Bullets[1].length] = { x: i*10, y: -190, d: 4 ,c: "#ff2222"};
				Bullets[1][Bullets[1].length] = { x: i*10+5, y: -100, d: 4 ,c: "#ff2222"};
				Bullets[1][Bullets[1].length] = { x: i*10, y: -10, d: 4 ,c: "#ff2222"};
				Bullets[1][Bullets[1].length] = { x: i*10+5, y: 80, d: 4 ,c: "#ff2222"};
			}
			enemies[enemies.length] = {x: 380, y: 20, w: 12, dx: -7, dy: 5, t: 3, speed: 2, color: "#9955FF",
				x_upper_limit: 400, x_lower_limit: 300, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 20, y: 650, w: 12, dx: 7, dy: 5, t: 3, speed: 2, color: "#9955FF",
				x_upper_limit: 100, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 280, y: 120, w: 16, dx: -5, dy: 5, t: 3, speed: 2, color: "#33FFFF",
				x_upper_limit: 400, x_lower_limit: 250, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 120, y: 550, w: 16, dx: 5, dy: 5, t: 3, speed: 2, color: "#33FFFF",
				x_upper_limit: 150, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 380, y: 650, w: 12, dx: -10, dy: 5, t: 3, speed: 2, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			enemies[enemies.length] = {x: 20, y: 20, w: 12, dx: 10, dy: 5, t: 3, speed: 2, color: "#ff2222",
				x_upper_limit: 400, x_lower_limit: 0, y_upper_limit: 700, y_lower_limit: 0};
			level_text = "Final";
			break;
		case 5:
			enemies[enemies.length] = {x: 200, y: 50, w: 10, dx: 1, dy: 0, t: 2, speed: 2, color: "#FF3333", blood: 20,
				x_upper_limit: 350, x_lower_limit: 50, y_upper_limit: 500, y_lower_limit: 0, inv: false};//5555ff
				level_text = "Ready";
			break;
		default:
			break;
	}
	level ++;
}
*/