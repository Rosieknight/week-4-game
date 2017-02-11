var alan = {
	name: "Dr. Alan Grant",
	hp: 130,
	ap: 7,
	ca: 6,
	attack: function(){
		this.ap = this.ap + 7;

	},
	counter: function(){},
	hp: function(){},
	reset: function(){
		this.ap = 7;
		this.hp - 130;
	},
}

var spitter = {
	name: "Dilophosaurus",
	hp: 100,
	ap: 6,
	ca: 10,
	attack: function(){
		this.ap = this.ap + 6;
	},
	counter: function(){},
	hp: function(){},
	reset: function(){
		this.ap = 6;
		this.hp = 100;
	},
}

var ellie = {
	name: "Dr. Ellie Sattler",
	hp: 150,
	ap: 5,
	ca: 7,
	attack: function(){
		this.ap = this.ap + 5;
	},
	counter: function(){},
	hp: function(){},
	reset: function(){
		this.ap = 5;
		this.hp = 150;
	},
}

var raptor = {
	name: "Velociraptor",
	hp: 170,
	ap: 4,
	ca: 8,
	attack: function(){
		this.ap = this.ap + 4;
	},
	counter: function(){},
	hp: function(){},
	reset: function(){
		this.ap = 4;
		this.hp = 170;
	},
}