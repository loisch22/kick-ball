//business

function Team(teamName)
{
 this.teamName = teamName;
 this.players = [];
}

function Player(playerName, playerImage, bio)
{
  this.playerName = playerName;
  this.playerImage = playerImage;
  this.bio = bio;
}
var newPlayer1;
var newPlayer2;
var newPlayer3;
var newPlayer4;
var newPlayer5;
var newPlayer6;
var newPlayer7;
var newPlayer8;
var newPlayer9;
var newPlayer10;
var newPlayer11;
var newPlayer12;

var players = [];
//user
$(document).ready(function() {
  newPlayer1 = new Player($(".player1Name").html(),$(".photo1").attr("src"),$("#player1Bio").html());
  players.push(newPlayer1);
  newPlayer2 = new Player($(".player2Name").html(),$(".photo2").attr("src"),$("#player2Bio").html());
  players.push(newPlayer2);
  newPlayer3 = new Player($(".player3Name").html(),$(".photo3").attr("src"),$("#player3Bio").html());
  players.push(newPlayer3);
  newPlayer4 = new Player($(".player4Name").html(),$(".photo4").attr("src"),$("#player4Bio").html());
  players.push(newPlayer4);
  newPlayer5 = new Player($(".player1Name").html(),$(".photo5").attr("src"),$("#player5Bio").html());
  players.push(newPlayer5);
  newPlayer6 = new Player($(".player6Name").html(),$(".photo6").attr("src"),$("#player6Bio").html());
  players.push(newPlayer6);
  newPlayer7 = new Player($(".player7Name").html(),$(".photo7").attr("src"),$("#player7Bio").html());
  players.push(newPlayer7);
  newPlayer8 = new Player($(".player8Name").html(),$(".photo8").attr("src"),$("#player8Bio").html());
  players.push(newPlayer8);
  newPlayer9 = new Player($(".player9Name").html(),$(".photo9").attr("src"),$("#player9Bio").html());
  players.push(newPlayer9);
  newPlayer10 = new Player($(".player10Name").html(),$(".photo10").attr("src"),$("#player10Bio").html());
  players.push(newPlayer10);
  newPlayer11 = new Player($(".player11Name").html(),$(".photo11").attr("src"),$("#player11Bio").html());
  players.push(newPlayer11);
  newPlayer12 = new Player($(".player12Name").html(),$(".photo12").attr("src"),$("#player12Bio").html());
  players.push(newPlayer12);

  $("#teamCaps").submit(function(event)
  {
    event.preventDefault(event);
    var team1NameValue = $("input#team1").val();
    var newTeam1 = new Team(team1NameValue);

    var team2NameValue = $("input#team2").val();
    var newTeam2 = new Team(team2NameValue);

    // console.log(newTeam1);

    $(".team1Input").html(newTeam1.teamName);
    $(".team2Input").html(newTeam2.teamName);

    $(".playerSelected").show();
    $(".playersAvailable").show();
    $("#teamCaps").hide();
  });

for(var i=0; i< players.length; i++)
{
  var thisPlayerNumber = i+1;
  $(".photo" + (thisPlayerNumber)).click(function() {
      $(this).siblings("h4").children(".bio").toggle();
  });
}

});
