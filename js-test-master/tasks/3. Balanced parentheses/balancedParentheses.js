export function areParenthesesBalanced(inputString) {
  var countopen = 0, countclose = 0;
  for(let i =0; i< inputString.length; i++){
    if(inputString[i] == '('){
      countopen++;
    } else if(inputString[i] == ')'){
      countclose++;
    }
    if(countclose > countopen){
      return false;
    }
  }
  if(countclose != countopen){
    return false;
  }
  return true;
}
