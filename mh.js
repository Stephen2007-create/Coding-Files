let cl = console.log;

let montyHall = function () {
  let doors = [0, 1, 2];
  let carDoor = Math.floor(Math.random() * 3);
  let firstGuess = Math.floor(Math.random() * 3);
  let goatDoor = doors.find((v) => v !== firstGuess && v !== carDoor);
  let secondGuess = doors.find((v) => v !== firstGuess && v !== goatDoor);
  return secondGuess === carDoor;
};

let totalWins = 0;
let totalGames = 10000000; // 10 million

for (let i = 0; i < totalGames; i++) {
  if (montyHall()) {
    totalWins++;
  }
}

let winPercentage = (totalWins / totalGames) * 100;

cl(`Total Wins: ${totalWins}`);
cl(`Win Percentage: ${winPercentage.toFixed(2)}%`);
