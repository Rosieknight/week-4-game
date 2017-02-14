var wins =0;
var losses =0;

var alan = {
	name: "Dr. Alan Grant",
	hp: 120, /*HP is Health Points*/
	ap: 4,   /*AP is Attack Power*/
	ca: 7,   /*CA is Counter Attack*/
	id: "alan", /*ID is actually the photo name.*/
	attack: function(){
		this.ap = this.ap + 5;
	},
	reset: function(){
		this.ap = 5;
		this.hp = 120;
	},
};

var spitter = {
	name: "Dilophosaurus",
	hp: 110,
	ap: 5,
	ca: 10,
	id: "spitter",
	attack: function(){
		this.ap = this.ap + 3;
	},
	reset: function(){
		this.ap = 4;
		this.hp = 110;
	},
};

var ellie = {
	name: "Dr. Ellie Sattler",
	hp: 140,
	ap: 3,
	ca: 9,
	id: "ellie",
	attack: function(){
		this.ap = this.ap + 4;
	},
	reset: function(){
		this.ap = 3;
		this.hp = 130;
	},
};

var raptor = {
	name: "Velociraptor",
	hp: 150,
	ap: 2,
	ca: 8,
	id: "raptor",
	attack: function(){
		this.ap = this.ap + 2;
	},
	reset: function(){
		this.ap = 2;
		this.hp = 140;
	},
};

var fighters = [alan, spitter, ellie, raptor];
var playerCharacter = -1;
var enemyCharacterIndex = [];
var pickedPC = false;
var pickedEnemy = false;
var enemyCharacter=-1;

function options(){
	for (var i = 0; i < fighters.length; i++) {
	
		var fighterDiv = $("<div>");
		fighterDiv.addClass("fighter col-xs-12 col-sm-5 text-center");
		fighterDiv.attr("id", i);
		$("#choose").append(fighterDiv);
		
		var named = $("<h4>");
		named.addClass("name");
		fighterDiv.append(named);
		var fullName =$(".name");
		fullName[i].append(fighters[i].name);
		
		
		var pic = $("<img src='assets/images/" + fighters[i].id + ".jpg' class = 'img-responsive' height = '200' width = '300'>");
		fighterDiv.append(pic);

		var healthPoints = $("<h4>");
		healthPoints.addClass("hp");
		healthPoints.attr("id", "track"+i);		
		fighterDiv.append(healthPoints);
		var health = $(".hp");
		health[i].append(fighters[i].hp);
	}
}

function replay(){
	playerCharacter = -1;
	enemyCharacterIndex = [];
	pickedPC = false;
	pickedEnemy = false;
	alan.reset();
	spitter.reset();
	ellie.reset();
	raptor.reset();
	$("#clean").html("<div class = 'row center-block' id = 'choose'></div>");
	$("#clean-up").html("<div class = 'col-xs-12' id ='player'></div>");
	$("#cleaner").html("<div class = 'col-xs-12' id = 'vs' ></div>");
	$("#cleaning").html("<div class = 'col-xs-12' id = 'foe'></div>");
	$("#messages").html("Click on two characters to start the game.");
}

function newEnemy(){
	pickedPC = true;
	pickedEnemy = false;
}


$(function() { /*According to jQuery's API, this is preferred now.*/
	
	options();
	
	$(document).on("click", ".fighter", function(){
		if(pickedPC===false){
			playerCharacter= this.id;
			pickedPC=true;
			$("#player").append(this);
			var attackButton = $("<button type='attack' class='btn btn-lg text-center' id='charge'>Attack</button>");
			$("#vs").append(attackButton);
			return pickedPC;
			return playerCharacter;
		}

		if(pickedPC===true && pickedEnemy===false){
			if (playerCharacter===this.id) {
				alert("Please pick another character.")
			} else{ 
				enemyCharacter=this.id;
				pickedEnemy=true;
				$("#foe").append(this);
				return pickedEnemy;
				return enemyCharacter;
			}

			return pickedEnemy;
			return enemyCharacter;

		}
		return pickedPC;
		return pickedEnemy;
		return playerCharacter;
		return enemyCharacter;
	});

	$(document).on("click", "#charge", function(){
		if (pickedEnemy===false) {
			alert("You have not picked an opponent");
		}

		$("#track"+ enemyCharacter).html(fighters[enemyCharacter].hp -= fighters[playerCharacter].ap);
		$("#track"+ playerCharacter).html(fighters[playerCharacter].hp -= fighters[enemyCharacter].ca);
		$("#messages").html(fighters[playerCharacter].name + " attacks for " + 
			fighters[playerCharacter].ap + " points worth of damage." + 
			fighters[enemyCharacter].name + " counter attacks and deals " + 
			fighters[enemyCharacter].ca + " points of damage.");
		fighters[playerCharacter].attack();
		enemyCharacterIndex.length;
		console.log(enemyCharacterIndex.length);

	if (fighters[playerCharacter].hp <= 0) {
		$("#messages").html("You Lose!");
		losses++;
		$("#boo").html("Losses: " + losses);
	}

	if(fighters[enemyCharacter].hp<=0){
		wins++;
		if (enemyCharacterIndex.length===2) {
			$("#messages").html("You beat the game!");
			$("#yeah").html("Wins: " + wins);
		}

		enemyCharacterIndex.push(enemyCharacter);
		$("#cleaning").html("<div class = 'col-xs-12' id = 'foe'></div>");
		enemyCharacter=-1;
		pickedEnemy=false;
	}
 

		
		

	});

	$(document).on("click", "#newGame",function(){
		replay();
		options();
	});

});

