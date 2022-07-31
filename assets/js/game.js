//Game States
//"WIN" - player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"LOSE" - player robot's health is zero or less
// var playerName 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multipl values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
        //place fight function here
    }
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health reamaining. "
        );

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyNames + " has died! ");
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left. ");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
        );

        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died! ");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
        //if the player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye! ");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        } 
        //if no (false), ask question again by running fight() again
        else {
            fight();
        } 
    } else {
        window.alert("You need to choose a valid option. Try Again!");
    }    
}

    

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};