export function getFibonacciUntil(n) {
  if(n == 0){
    return [];
  }else if(n == 1){
    return [0];
  } else if(n == 2){
    return [0 , 1];
  } else {
    var result = getFibonacciUntil(n-1);
    var nextmember = result[n-2] + result[n-3];
    result.push(nextmember)
    return result;
  }
}
