const expect = chai.expect;
const assert = chai.assert;

describe("Play function test", () => {
  describe("Play function test", () => {
    class Deck {
      constructor(cards) {
        this.cards = new Card().getCards();
        this.mixedCards = [];
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

    it("#should return array equal to previous", () => {
      let newDeck = new Deck();
      expect(newDeck.shuffle()).to.equal(newDeck.shuffle());
    });

    it("#should return array NOT equal to previous", () => {
      let newDeck1 = new Deck();
      let newDeck2 = new Deck();
      expect(newDeck1.shuffle()).not.equal(newDeck2.shuffle());
    });
  });
});
