var b=document.querySelectorAll("button");
var num=b.length;
function makeSound(key){
  switch(key){
    case "sa":
    var audio = new Audio("sounds/sa.mpeg");
    audio.play();
    break;
    case "ri":
    var audio1 = new Audio("sounds/ri.mpeg");
    audio1.play();
    break;
    case "ga":
    var audio2 = new Audio("sounds/ga.mpeg");
    audio2.play();
    break;
    case "ma":
    var audio3 = new Audio("sounds/ma.mpeg");
    audio3.play();
    break;
    case "pa":
    var audio4 = new Audio("sounds/pa.mpeg");
    audio4.play();
    break;
    case "da":
    var audio5 = new Audio("sounds/dha.mpeg");
    audio5.play();
    break;
    case "ni":
    var audio6 = new Audio("sounds/ni.mpeg");
    audio6.play();
    break;  }
}
for(i=0;i<num;i++){
    b[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
      });
  }
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    
});
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
