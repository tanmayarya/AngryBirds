var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);
var angle = document.getElementById("angle");
var power = document.getElementById("power");




var player = world.createEntity({
	name: "player",
	shape: "circle",
	radius: 1,
	image: "a.png",
	imageStretchToFit: true,
	x: 2,
	density: 2,


	onImpact: function  (entity, force) {
		if (entity.name() === "block" || entity.name() === "pig") {
			window.setTimeout(function(){
				player.destroy();

			}, 4000);
		}
	},

	onKeyDown: function  (event) {
		console.log(event);
		if (event.key== "z") {
			this.applyImpulse(110, 45); 
			window.setTimeout(function(){
				console.log("hello");
				this.destroy();

			}, 10000);
		}
		
	}
	

});

world.createEntity({
	name: "ground",
	shape: "square",
	type: "static" ,
	color: "#ffffff",
	borderWidth:"0",
	width: 80,
	height: 0 ,
	y:  22.5,
	x: 1 
});

var block = {
	name: "block",
	shape: "square",
	color: "#C58339" ,
	width: .5,
	height: 3,
};

var pig = {
	name: "pig",
	shape: "circle",
	radius: 1,
	image: "k.png",
	imageStretchToFit: true,
	onImpact: function  (entity, force) {
		if (entity.name() === "block" || entity.name() === "player") {
			this.image("cloud.jpg");
			window.setTimeout(this.destroy(), 5000);

		}
	}
};

world.createEntity(block,{
	x: 40.5,
	height: 2.5,
	y: 20
});
world.createEntity(block,{
	x: 35.5,
	height: 2.5,
	y: 20
});
world.createEntity(block,{
	x: 38,	
	width: 6,
	height: .5,
	y: 18.5,
	name: "ground2"
});
world.createEntity(pig,{
	x: 38,
	y: 17
});


world.createEntity(block,{
	x: 40,
	y: 16.7
});
world.createEntity(block,{
	x: 36,
	y: 16.7
});
world.createEntity(block,{
	x: 38,	
	width: 5.5,
	height: .5,
	y: 15.7,
	name: "ground3"
});

world.createEntity(pig,{
	x: 38,
	y: 13,
	image: "d.png"

});

function myFunction() {
	player.applyImpulse(power.value, angle.value);
	
}