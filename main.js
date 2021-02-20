canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height =90;

rover_x = 5;
rover_y =10;

var nasa=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var rmd_no= Math.floor(Math.random() * 5);
console.log(rmd_no);

background_image=nasa[rmd_no];
rover_image="rover.png";

function add(){
    bg_image=new Image();
    bg_image.onload=upload_background;
    bg_image.src=background_image;

    rover_img=new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;
}

function upload_background() {
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

    keypressed=e.keyCode;
    console.log(keypressed);
    
    if (keypressed=='37'){

        left();
        console.log("Left key is pressed.");
    }

    if (keypressed=='38'){

        up();
        console.log("Up key is pressed.");
    }

    if (keypressed=='39'){

        right();
        console.log("Right key is pressed.");
    }

    if (keypressed=='40'){

        down();
        console.log("Down key is pressed.");
    }

}
function up(){
    if (rover_y > 0){
        rover_y= rover_y-10;
        console.log("When up is pressed x= "+ rover_x+" and Y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if (rover_y <= 500){
        rover_y= rover_y+10;
        console.log("When down is pressed x= "+ rover_x+" and Y = "+ rover_y);
        upload_background();
        upload_rover();

    }
}

function left(){
    if (rover_x > 0){
        rover_x= rover_x-10;
        console.log("When left is pressed x= "+ rover_x+" and Y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}

function right(){
    if (rover_x <= 700){
        rover_x= rover_x+10;
        console.log("When right is pressed x= "+ rover_x+" and Y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}