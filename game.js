//Array of the enemy names
var enemyNames = ["Roborto" , "Amy Android" , "Robo Trumble" ];
console.log(enemyNames);

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}
//prompts

console.log (playerName);
console.log(10+10);

console.log("Our robot's name is " + playerName)
//fight();
// Player information

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMony = 10;
console.log(playerName, playerAttack, playerHealth);


// Enemy information
var enemyHealth = 50;
var enemyAttack = 12;
console.log (enemyNames, enemyHealth ,enemyAttack)

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");




//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.

  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );
  
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

    playerHealth = playerHealth - enemyAttack;

    console.log(
        enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining ")

  // Log a resulting message to the console so we know that it worked.
};




for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
