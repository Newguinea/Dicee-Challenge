function get_number(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber
}

function get_picture(randomNumber){
  var picture_tmp = "images/dice" + randomNumber + ".png";
  return picture_tmp
}

var number1 = get_number();
var number2 = get_number();

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", get_picture(number1));

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", get_picture(number2));

if (number1 > number2){
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (number1 < number2){
  document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
