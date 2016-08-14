var CardModel = function () {
        var cards = init_deck(),
        suits = ['Heart', 'Dimond','Club','Spade'];


    this.drawCard = function(){
        var cardIndex = getRandomInt(0,cards.length),
            suit = suits[Math.floor(cardIndex / 13)],
            card = cardIndex % 13;
        
        cards.splice(cardIndex,1);

        return getCard(suit,card);
    }

    this.resetDek = function(){
        cards = init_deck();
    }

    function init_deck (){
        return Array(51).fill(0).map((_, i) => i);
    }


    function getCard(suit, card){
        var result = {};
        result[suit] = card;
        return result;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return this;
}
