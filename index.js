var mambet;
var gone;
var country;
var code;
var city;
var ride;
var tip;
var tipReturn;

var chemoget;
var bye;

function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
    console.log()
    return 'This one is on me!';
  }else if (ride > 2000 && ride < 2500){
    mambet = 'I will gladly take your thirty bucks.';
    console.log(mambet);
    return mambet;
  }else if (ride > 2500 ){
    gone = 'No can do.';
    return gone;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === 'NYC'){

    country = 'Ok, sounds good.';
    return country;
  }else{
    code = 'No go.';
    return code; 
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  if (tip == 'generous'){
    tipReturn = 'Thank you so much.';
    return tipReturn;
  }else if(tip == 'not as generous'){
    chemoget = 'Thank you.';
    return chemoget;
  }else{
    bye = 'Bye.';
    return bye;
  }
}