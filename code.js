var money = 0;
var tap = 1;

draw();

function draw() {
  
  
}

onEvent("butStart", "click", function() {
  setScreen("game");
});


onEvent("tap", "click", function() {
  money += tap;
  setText("moneyText", "$" + money);
  console.log(money);
});
