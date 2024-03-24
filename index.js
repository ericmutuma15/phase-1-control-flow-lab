function scuberGreetingForFeet(someValue){
  // Write your code here!
  let message;
  
  if(someValue <= 400){
     message = 'This one is on me!';

  }
  else if (someValue <2000 && someValue >400){
    message = 'That will be twenty bucks.';

    }

  else if (someValue>2000 && someValue <= 2500){
      message = 'I will gladly take your thirty bucks.';

  }

  else if (someValue>2500){
   message = 'No can do.';

  }
  return message;

}

function ternaryCheckCity(city){
  // Write your code here!
  let msg;
   
  if (city === "NYC"){
    msg = "Ok, sounds good.";

  }
  
   else if (city === 'Pittsburgh'){
    msg = 'No go.';
  }
  return msg;
}
console.log(ternaryCheckCity('Pittsburgh'))

function switchOnCharmFromTip(tip){
  // Write your code here!
  let info;

  if (tip === 'generous'){
    info = 'Thank you so much.';
  }
  else if (tip ==='not as generous'){
    info = 'Thank you.';
  }
  else if (tip ==='thanks for everything'){
    info = 'Bye.'
  }
  return info;
}