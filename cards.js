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
  return deck;
};
let createCard = function (rank, suit) {
  return {
    rank: rank,
    suit: suit,
    color: getColor(suit),
    name: getName(rank),
  };
};
let getName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank + "";
  }
};
let getColor = function (suit) {
  if (suit === "Hearts" || suit === "Diamonds") {
    return "Red";
  } else {
    return "Black";
  }
};

let deck = buildDeck();
console.table(deck);

let dealHand = function (deck) {
  return [
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
  ];
};
let dealCard = function (deck) {};

console.table(createCard(11, "Clubs"));
console.log(getColor("Hearts"));
console.table(dealCard(deck));
