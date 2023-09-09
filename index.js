/**
 *   WAR GAME.
 *
 *   1. Create a class Card. It will return array of cards with suits.
 *   The rank will be a number from 2-14 (11-14 represents Jack, Queen,
 *   King, and Ace). The suit will be one of
 *   the following strings: "Hearts", "Diamonds", "Clubs", "Spades".
 *
 *  2. Create a class Deck. A deck object will have one property:
 *  an array of cards. When instantiated, a deck will populate the
 *  array with all 52 possible card values, and then shuffle them.
 *
 *   3. Create a class Player. A player object will have 3
 *   properties: a name, a hand (array of cards), and a score = 0.
 *   When instantiated, a player will be given a name and an empty
 *   hand and score. A player will also have two methods: playCard
 *   and addPoint.
 *
 *   4. Create Function which will take cards, shuffle them and separate
 *   them. This function should compare players' cards and calculate scores.
 *   And make final decision bases on which player got more points.
 *
 */

class Card {
  constructor() {
    this.rank = [];
    this.suit = ["Hearts", "Diamonds", "Clubs", "Spades"];
    this.arr = [];
  }

  // I created this method to get the array of cards from 2 to 14.
  //  cards 11 - 14 represent Jack, Queen, King, and Ace.
  getRank() {
    for (let i = 2; i <= 14; i++) {
      this.rank.push(i);
    }
    // console.log(this.rank);
  }

  // I created this method to get the card's array with suits.
  // I used loop in loop to get new array with suits.
  getCards() {
    this.getRank();
    for (let i = 0; i < this.rank.length; i++) {
      for (let k = 0; k < this.suit.length; k++) {
        this.arr.push(this.rank[i]);
      }
    }
    return this.arr;
  }
}

class Deck {
  constructor(cards) {
    this.cards = new Card().getCards();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  // Deals one card from the deck.
  deal() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
  // This method will take latest cards from to the player's hand to play.
  playCard() {
    return this.hand.pop();
  }

  // This method will add 1 point to the player's score.
  addPoint() {
    this.score += 1;
  }
}

function playGame() {
  let newDeck = new Deck();
  newDeck.shuffle();

  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");

  // Here we fill the player's hand with cards from the deck.
  for (let i = 0; i < 26; i++) {
    player1.hand.push(newDeck.deal());
    player2.hand.push(newDeck.deal());
  }

  // Here we compare the cards from the player's hand and add 1 point to the winner.
  for (let i = 0; i < 26; i++) {
    const card1 = player1.hand;
    const card2 = player2.hand;

    // console.log(card1[i]);

    if (card1[i] > card2[i]) {
      player1.addPoint();
      //   console.log("player1 =====> " + player1.score + ":  " + player1.hand);
      //   console.log("player2 =====> " + player2.score + ":  " + player2.hand);
    } else if (card1[i] < card2[i]) {
      player2.addPoint();
    }
  }

  console.log(`${player1.name} Score: ${player1.score}`);
  console.log(`${player2.name} Score: ${player2.score}`);

  if (player1.score > player2.score) {
    console.log(`${player1.name} wins!`);
  } else if (player1.score < player2.score) {
    console.log(`${player2.name} wins!`);
  } else {
    console.log("It's a tie!");
  }
}

playGame();
