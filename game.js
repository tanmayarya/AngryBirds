var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);


world.createEntity({
	name: "player",
	shape: "circle",
	radius: 1,
	image: "a.png",
	imageStretchToFit: true,
	x: 2,
	density: 2,

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
	color: "rgb(0,100,0)" ,
	width: 62,
	height: .5 ,
	y:  21,
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
	x: 30.5,
	height: 2.5,
	y: 20
});
world.createEntity(block,{
	x: 25.5,
	height: 2.5,
	y: 20
});
world.createEntity(block,{
	x: 28,	
	width: 6,
	height: .5,
	y: 18.5,
	name: "ground2"
});
world.createEntity(pig,{
	x: 28,
	y: 20
});


world.createEntity(block,{
	x: 30,
	y: 16.7
});
world.createEntity(block,{
	x: 26,
	y: 16.7
});
world.createEntity(block,{
	x: 28,	
	width: 5.5,
	height: .5,
	y: 15.7,
	name: "ground3"
});

world.createEntity(pig,{
	x: 28,
	y: 16,
	image: "d.png"

});

