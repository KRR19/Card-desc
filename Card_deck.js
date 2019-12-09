var value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suit = ['♠', '♥', '♦', '♣'];
var card_desk = [];
for (let i = 0; i < value.length * suit.length ; i++)
    card_desk[i] = value[i % value.length] + suit[Math.floor( i / value.length)];
