 var  numOfSquare=6;
 var colors= generateRandomColor(numOfSquare);


 var square=document.getElementsByClassName('square');
 var pickedColor=pickColor();
 var codeofrgb=document.getElementById("codeofrgb");
 var message=document.getElementById("message");
 var h1=document.querySelector("h1");
 var reset=document.getElementById("reset");
 var easyBtn=document.getElementById("easy");
 var hardBtn=document.getElementById("hard");
 codeofrgb.textContent=pickedColor;

 


for(var i=0;i<square.length;i++){

	square[i].style.background=colors[i];

	square[i].addEventListener("click",function(){
	    var clickedColor = this.style.background;
	    if(clickedColor==pickedColor){
	        message.textContent="Correct";
	        message.style.color="steelblue";
	        reset.textContent="Play Again"
	        changeColor(clickedColor);
	        h1.style.background=clickedColor;


	    }

	    else{
	    	this.style.background="#232323";
	    	message.textContent="Try Again"
	    	message.style.color="red";
	    }

	});

}
function changeColor(color){

	for(var i=0;i<square.length;i++){
		square[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);	
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return ("rgb(" +r +", "+g+", "+b+")"); 
}

reset.addEventListener("click",function(){
	colors=generateRandomColor(numOfSquare);
	pickedColor=pickColor();
	codeofrgb.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
	  square[i].style.background=colors[i]

	}
  
	h1.style.background="steelblue";

})
easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquare=3;
	colors=generateRandomColor(numOfSquare);
	pickedColor=pickColor();
	codeofrgb.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.background=colors[i]
		}
		else{
			square[i].style.display="none";
		}
	}

})
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquare=6;
	colors=generateRandomColor(numOfSquare);
	pickedColor=pickColor();
	codeofrgb.textContent=pickedColor;
	for(var i=0;i<square.length;i++){

		square[i].style.background=colors[i]
		square[i].style.display="block";
	}
	
})
	