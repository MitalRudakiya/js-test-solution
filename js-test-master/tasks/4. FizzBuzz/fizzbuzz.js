export function getFizzBuzzUntil(n) {
  if(n==1){
    return [1];
  } else {
    var result = getFizzBuzzUntil(n-1);
    var nextmember = n;
    if(n%3 == 0 && n%5 == 0){
      nextmember = "FizzBuzz";
    } else if(n%5 == 0){
      nextmember = "Buzz";
    } else if(n%3 == 0){
      nextmember = "Fizz";
    }
    result.push(nextmember);
    return result;
  }
}
