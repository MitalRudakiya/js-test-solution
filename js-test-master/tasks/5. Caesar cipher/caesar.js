export function encryptCaesar(inputString, key) {
  inputString = inputString.toUpperCase();
  var firstCode = 65, lastCode = 90;
  var outputStr = "";
  for(let i = 0; i < inputString.length; i++){
    var code = inputString.charCodeAt(i);
    var nextCode = code + key;
    if(nextCode > lastCode){
      nextCode = firstCode + (nextCode - lastCode - 1);
    }
    outputStr += String.fromCharCode(nextCode);
  }
  return outputStr;
}
