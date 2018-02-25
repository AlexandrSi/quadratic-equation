module.exports = function solveEquation(equation) {
  var arrayOfString = equation.split(" ");
  var arrOfAnswer=[];
  var x=[];
  var D;
  x[0] = parseInt(arrayOfString[0]);
  x[1] = parseInt(arrayOfString[3]+arrayOfString[4]);
  x[2] = parseInt(arrayOfString[7]+arrayOfString[8]);
  D = Math.pow(x[1],2)-4*x[0]*x[2];
  arrOfAnswer[0] = (-x[1]+Math.sqrt(D))/(2*x[0]);
  arrOfAnswer[1] = (-x[1]-Math.sqrt(D))/(2*x[0]);
  if(arrOfAnswer[0] < arrOfAnswer[1]) return [(arrOfAnswer[0]).toFixed(0), (arrOfAnswer[1]).toFixed(0)];
  else return [(arrOfAnswer[1]).toFixed(0), (arrOfAnswer[0]).toFixed(0)];
};