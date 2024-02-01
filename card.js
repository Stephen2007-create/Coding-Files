let getName = function (rank) {
  // Provide logic to get the name based on the rank
};

let getColor = function (suit) {
  // Provide logic to get the color based on the suit
};

let createCard = function (rank, suit) {
  return {
    rank: rank,
    suit: suit,
    color: getColor(suit),
    name: getName(rank),
  };
};

let buildDeck = function () {
  let deck = [];
  for (let index = 2; index < 15; index++) {
    deck.push(
      createCard(index, "Hearts"),
      createCard(index, "Spades"),
      createCard(index, "Diamonds"),
      createCard(index, "Clubs")
    );
  }
  return deck; // Add this line to return the deck array
};

let deck = buildDeck();
console.table(deck);

let dealHand = function (deck) {
  // Implement logic to deal a hand from the deck
};

let dealCard = function (deck) {
  // Implement logic to deal a card from the deck
};

createCard(11, "Clubs");
