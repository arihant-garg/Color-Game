var numColor = 6
var colors = generateColor(numColor);
var pickedColor = pickColor();
var friend = document.querySelector(".friend");
var todos = document.querySelectorAll(".todo");
var message = document.querySelector(".message");
var game = document.querySelector(".game");
var resetButton = document.querySelector(".resetButton");
var hardBtn = document.querySelector("#hardbtn");
var easyBtn = document.querySelector("#easybtn");
friend.textContent = pickedColor;
easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selective");
  hardBtn.classList.remove("selective");
  numColor = 3;
  colors = generateColor(numColor);
  pickedColor = pickColor();
  friend.textContent = pickedColor;
  for(var i=0;i < todos.length; i++){
      if(colors[i]){
    todos[i].style.background = colors[i];}
    else{
        todos[i].style.display = "none";
    }
}
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selective");
    easyBtn.classList.remove("selective");
    numColor = 6;
    colors = generateColor(numColor);
    pickedColor = pickColor();
    friend.textContent = pickedColor;
    for(var i=0;i < todos.length; i++){
      todos[i].style.background = colors[i];
          todos[i].style.display = "block";
  }
  });
for(var i=0;i < todos.length; i++){
    todos[i].style.background = colors[i];

     todos[i].addEventListener("click", function(){
        var know =  this.style.background;
        if(know === pickedColor)
        {
            resetButton.textContent = "Play Again?"
            message.textContent = "Correct!";
            changeColor(know);
            game.style.background = know;
        }
        else{
            this.style.background = "#232323"
            message.textContent = "try again";
        }
     });
}
function changeColor(color){
    for(var i=0;i < todos.length;i++){
        todos[i].style.background = color;
    }
}
function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}
function generateColor(num){
    var arr = []
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
resetButton.addEventListener("click", function(){
      colors = generateColor(numColor);
      pickedColor = pickColor();
      friend.textContent = pickedColor;
      message.textContent = "";
      resetButton.textContent = "NEW COLORS"
      for(var i=0;i < todos.length; i++){
        todos[i].style.background = colors[i];}
       game.style.background = "steelblue";
});