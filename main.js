canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var x= document.getElementById("myAudio");

birthday_images_array = ["1.jpg.jpg","2.jpg.jpg","3.jpg.jpg","4.jpg.jpg"]

random_number = Math.floor(Math.random() * 4);
console.log(random_number);


background_image = birthday_images_array[random_number];
console.log("background_image = " + background_image);




function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   

	
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}






function playSound(){
	x.play();
}



	