class MemoryGame { 
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };

  shuffleCards(theDeck) {
    
    let cardsArray = theDeck.length;
    let tempCard, i; 

    while (cardsArray) {
      i = Math.floor(Math.random() * cardsArray--); 
      //give me a random value between 0 and 23 (theDeck.length is 24, and cardsArray is 24), and cardsArray now equals 23 due to the -- 
      tempCard = theDeck[cardsArray];
      theDeck[cardsArray] = theDeck[i];
      theDeck[i] = tempCard;
      //whichever value we randomly selected, swap it with the last one, then swap the next one with the second to last one, and so on. This allows for every value to be swapped with another value, so its not the same over and over, and the length shortens to allow for that.
    }
    this.cards = theDeck; 
  };


  checkIfPair(firstCard, secondCard) {
      this.pairsClicked ++;
    if(firstCard.attr('name') === secondCard.attr('name')) {
      this.pairsGuessed ++;
      return true;
    } else {
      return false;
    }
  };

  isFinished() {
    if(this.pairsGuessed === 8) {
      return true;
    } else {
      return false;
    }
  }

  
  updateScores() {
    $('#pairs_clicked').html(this.pairsClicked);
    $('#pairs_guessed').html(this.pairsGuessed);
  }
}