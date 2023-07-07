// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
//returns the number of blocks given a value
  if (someValue<42){
    return(42-someValue);
  }
  else {
    return(someValue-42);
  }
}
//calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
//the return value of distanceFromHqInBlocks can then be used to calculate feet
function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue)*264;
  
}
//returns the number of feet traveled
function distanceTravelledInFeet(x,y){
  if (y>x){
    return((y-x)*264);
  }
  else
    return((x-y)*264);
}

//returns the fare for the customer
function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance<= 400){
    return 0; //free sample
  }
  if (distance >= 400 && distance <= 2000){
    return (distance-400)* 0.02; //two cents
  }
  else if(distance >= 2000 && distance <= 2500){
    return 25; //25 dollars
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}


