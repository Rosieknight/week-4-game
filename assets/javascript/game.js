var alan = {
	name: "Dr. Alan Grant",
	hp: 130, /*HP is Health Points*/
	ap: 7,   /*AP is Attack Power*/
	ca: 6,   /*CA is Counter Attack*/
	id: "alan",
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
	id: "spitter",
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
	id: "ellie",
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
	id: "raptor",
	attack: function(){
		this.ap = this.ap + 4;
	},
	reset: function(){
		this.ap = 4;
		this.hp = 170;
	},
};

var fighters = [alan, spitter, ellie, raptor];
var playerCharacter = [];
var enemyCharacterIndex = null;
var pickedPC = false;
var pickedEnemy = false;

$(document).ready(function() {

	for (var i = 0; i < fighters.length; i++) {
	
		var fighterDiv = $("<div>");
		fighterDiv.addClass("fighter col-xs-12 col-sm-5 text-center");
		$("#choose").append(fighterDiv);
		
		var named = $("<p>");
		named.addClass("name");
		fighterDiv.append(named);
		var fullName =$(".name");
		fullName[i].append(fighters[i].name);
		
		
		var pic = $("<img>");
		pic.attr("scr","assets/images/" +fighters[i].id+".jpg");
		pic.addClass("img-responsive");
		pic.attr("height", "200");
		pic.attr("width", "300");
		fighterDiv.append(pic);

		var healthPoints = $("<p>");
		healthPoints.addClass("hp");		
		fighterDiv.append(healthPoints);
		var health = $(".hp");
		health[i].append(fighters[i].hp);
	

		$(document).on("click", ".fighter", function(){
		
		/*var playerChar= ;*/
		console.log(playerChar);
		$("#player").append(playerChar);
		});
	};
	
});