
document.querySelector("button").addEventListener("click",function(){

  var randomnumber1=Math.floor((Math.random()*6)+1);
  var randomimg1="images/dice"+randomnumber1+".png";

  document.querySelector(".img1").setAttribute("src",randomimg1);
  var randomnumber2=Math.floor((Math.random()*6)+1);
  var randomimg2="images/dice"+randomnumber2+".png";
  document.querySelector(".img2").setAttribute("src",randomimg2);
  if(randomnumber1===randomnumber2)
  {
    document.querySelector("h1").innerHTML="OOPs,It's a tie !!";
  }
  else if(randomnumber1>randomnumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 won";
  }
  else if(randomnumber1<randomnumber2)
  {
    document.querySelector("h1").innerHTML="Player 2 won";
  }
});
