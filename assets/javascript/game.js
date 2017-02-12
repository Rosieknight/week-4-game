var alan = {
	name: "Dr. Alan Grant",
	hp: 130, /*HP is Health Points*/
	ap: 7,   /*AP is Attack Power*/
	ca: 6,   /*CA is Counter Attack*/
	attack: function(){
		this.ap = this.ap + 7;
	},
	reset: function(){
		this.ap = 7;
		this.hp - 130;
	},
};

var spitter = {
	name: "Dilophosaurus",
	hp: 100,
	ap: 6,
	ca: 10,
	attack: function(){
		this.ap = this.ap + 6;
	},
	reset: function(){
		this.ap = 6;
		this.hp = 100;
	},
};

var ellie = {
	name: "Dr. Ellie Sattler",
	hp: 150,
	ap: 5,
	ca: 7,
	attack: function(){
		this.ap = this.ap + 5;
	},
	reset: function(){
		this.ap = 5;
		this.hp = 150;
	},
};

var raptor = {
	name: "Velociraptor",
	hp: 170,
	ap: 4,
	ca: 8,
	attack: function(){
		this.ap = this.ap + 4;
	},
	reset: function(){
		this.ap = 4;
		this.hp = 170;
	},
};

var fighters = [alan, spitter, ellie, raptor];

for (var i = 0; i < fighters.length; i++) {
	var health = $(".hp");
	health[i].append(fighters[i].hp);
}

$(document).ready(function() {

	$(document).on("click", ".fighter", function(){
		playerChar=fighters[0];  
		console.log(playerChar);
		$("#player").append(playerChar);
	});


	
})