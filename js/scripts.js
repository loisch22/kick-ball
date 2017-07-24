//business

function Team(teamName)
{
 this.teamName = teamName;
 this.players = [];
}

function Player(playerName, bio)
{
  this.playerName = playerName;
  this.bio = bio;
};

var players = [];
var newPlayer = new Player("Kaili","example bio");
players.push(newPlayer);
var newPlayer1 = new Player("Parul","example bio");
players.push(newPlayer1);
var newPlayer2 = new Player("Kim","example bio");
players.push(newPlayer2);
var newPlayer3 = new Player("Andrew","example bio");
players.push(newPlayer3);

//user
$(document).ready(function() {


  $("#teamCaps").submit(function(event)
  {
    event.preventDefault(event);
    var team1NameValue = $("input#team1").val();
    var newTeam1 = new Team(team1NameValue);

    var team2NameValue = $("input#team2").val();
    var newTeam2 = new Team(team2NameValue);

    console.log(newTeam1);
    
    $(".team1Input").html(newTeam1.teamName);
    $(".team2Input").html(newTeam2.teamName);
  });
});
