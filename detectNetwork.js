// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  prefix = cardNumber.substring(0,2);
  prefix_first = cardNumber.substring(0,1);
  prefix_third = cardNumber.substring(0,3);
  prefix_four = cardNumber.substring(0,4);
  prefix_six = cardNumber.substring(0,6);

  len = cardNumber.length;
  var result = "";

  if((prefix == '38' || prefix == '39')&& len == 14){
    result = "Diner's Club";
  }

  if((prefix == '34' || prefix == '37') && len == 15){
      result = "American Express";
  }

  if(prefix.substring(0,1) == '4' && (len == 13 || len == 16 || len == 19)){
      result = "Visa";
  }
  if((prefix == '51' || prefix == '52'|| prefix == '53'|| prefix == '54' || prefix == '55') && (len == 16)){
      result = "MasterCard";
  }

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if((prefix_four == '6011' || ((parseInt(prefix_third)) <= 649 && (parseInt(prefix_third)) >= 644) || prefix == '65') && (len == 16 || len == 19)){
      result = "Discover";
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if((prefix_four == '5018' || prefix_four == '5020' || prefix_four == '5038' || prefix_four == '6304') && (len <= 19 && len >= 12)){
      result = "Maestro";
  }

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if(( (parseInt(prefix_six) <= 622925 && parseInt(prefix_six) >= 622126) || (parseInt(prefix_third) <= 626 && parseInt(prefix_third) >= 624) || (parseInt(prefix_four) <= 6288 && parseInt(prefix_four) >= 6282)) && (len <= 19 && len >= 16) ){
      result = 'China UnionPay';
  }

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  if((prefix_four == '4903' || prefix_four == '4905' || prefix_four == '4911' || prefix_four == '4936' || prefix_four == '6759' || prefix_four == '6333' || prefix_six == '564182' || prefix_six == '633110' || prefix_six == '633110') && (len == 16 || len == 18 || len == 17 || len == 19)){
      result = "Switch";
  }

  return result;
  //console.log(prefix.substring(0,1));
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
