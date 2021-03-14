module.exports = function reverse (n) {
  let strN = n.toString();
  let result = '';
  for(let i = strN.length - 1; i >= 0; i--) {
    if(strN[i] !== '-') {
        result += strN[i];
    }  
  }
  return +(result);
}
