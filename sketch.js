const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var G, G1, G2;
var P;
var B1, B2, B3, B4, B5, B6, B7, B8, B9 , B10, B11, B12, B13, B14, B15;
var C;
var bg2;

var Score = 0;

function preload(){
    getBackground();
}

function setup(){
    var canvas = createCanvas(1400,550);

    engine = Engine.create();
    world = engine.world;

    G = new Ground(700,540,1400,20)
    G1 = new Ground(700,250,250,20);
    G2 = new Ground(1000,400,250,20);

    //1 Line 1 Row
    B1 = new Block(590,225,30,30);
    B2 = new Block(660,225,30,30);
    B3 = new Block(625,225,30,30);
    B4 = new Block(730,225,30,30);
    B5 = new Block(695,225,30,30);
    B6 = new Block(765,225,30,30);
    B7 = new Block(800,225,30,30);
    
    //2 line 1 Row
    B8 = new Block(890,375,30,30);
    B9 = new Block(925,375,30,30);
    B10 = new Block(960,375,30,30);
    B11 = new Block(995,375,30,30);
    B12 = new Block(1030,375,30,30);
    B13 = new Block(1065,375,30,30);
    B14 = new Block(1100,375,30,30);

    //1 line 2 Row
    B15 = new Block(606,195,30,30);
    B16 = new Block(640,195,30,30);
    B17 = new Block(675,195,30,30);
    B18 = new Block(710,195,30,30);
    B19 = new Block(745,195,30,30);
    B20 = new Block(780,195,30,30);
    //1 line 3 Row
    B21 = new Block(625,165,30,30);
    B22 = new Block(660,165,30,30);
    B23 = new Block(695,165,30,30);
    B24 = new Block(730,165,30,30);
    B25 = new Block(765,165,30,30);
    //1 line 4 Row
    B26 = new Block(644,135,30,30);
    B27 = new Block(679,135,30,30);
    B28 = new Block(714,135,30,30);
    B29 = new Block(749,135,30,30);
    //1 line 5 Row
    B30 = new Block(663,105,30,30);
    B31 = new Block(698,105,30,30);
    B32 = new Block(733,105,30,30);
    //1 line 6 Row
    B33 = new Block(682,75,30,30);
    B34 = new Block(720,75,30,30);
    //1 line 7 Row
    B35 = new Block(701,45,30,30);

    //2 line 2 Row
    B36 = new Block(905,344,30,30);
    B37 = new Block(940,344,30,30);
    B38 = new Block(975,344,30,30);
    B39= new Block(1010,344,30,30);
    B40 = new Block(1045,344,30,30);
    B41 = new Block(1080,344,30,30);
    //2 line 3 Row
    B42 = new Block(925,313,30,30);
    B43 = new Block(960,313,30,30);
    B44 = new Block(996,313,30,30);
    B45 = new Block(1031,313,30,30);
    B46 = new Block(1066,313,30,30);
    //2 line 4 Row
    B47 = new Block(945,282,30,30);
    B48 = new Block(980,282,30,30);
    B49 = new Block(1015,282,30,30);
    B50 = new Block(1050,282,30,30);
    //2 line 5 Row
    B51 = new Block(965,251,30,30);
    B52 = new Block(1000,251,30,30);
    B53 = new Block(1035,251,30,30);
    //2 line 6 Row
    B54 = new Block(985,220,30,30);
    B55 = new Block(1020,220,30,30);
    //2 line 7 Row
    B56 = new Block(1005,189,30,30);

    P = new Polygon(200,200,60,60);

    slingShot = new Connection(P.body, {x:200, y:200});

    
}
function draw(){
    if(bg2){
        background(bg2);
    }

    
    Engine.update(engine);





    textSize(25);
    fill("orange")
    text("Score : "+ Score,1270,30);



    fill("brown")
    G.display();
    fill("black");
    G1.display();
    G2.display();

    P.display();
 
    slingShot.display();

    fill("green");
    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();
    B8.display();
    B9.display();
    B10.display();
    fill("white");
    B11.display();
    B12.display();
    B13.display();
    B14.display();
    B15.display();
    B16.display();
    B17.display();
    B18.display();
    B19.display();
    B20.display();
    fill("cyan");
    B21.display();
    B22.display();
    B23.display();
    B24.display();
    B25.display();
    B26.display();
    B27.display();
    B28.display();
    B29.display();
    B30.display();
    fill("yellow");
    B31.display();
    B32.display();
    B33.display();
    B34.display();
    B35.display();
    B36.display();
    B37.display();
    B38.display();
    B39.display();
    B40.display();
    fill("purple");
    B41.display();
    B42.display();
    B43.display();
    B44.display();
    B45.display();
    B46.display();
    B47.display();
    B48.display();
    B49.display();
    B50.display();
    fill("lightblue");
    B51.display();
    B52.display();
    B53.display();
    B54.display();
    B55.display();
    B56.display();

    B1.Score();
    B2.Score();
    B3.Score();
    B4.Score();
    B5.Score();
    B6.Score();
    B7.Score();
    B8.Score();
    B9.Score();
    B10.Score();
    B11.Score();
    B12.Score();
    B13.Score();
    B14.Score();
    B15.Score();
    B16.Score();
    B17.Score();
    B18.Score();
    B19.Score();
    B20.Score();
    B21.Score();
    B22.Score();
    B23.Score();
    B24.Score();
    B25.Score();
    B26.Score();
    B27.Score();
    B28.Score();
    B29.Score();
    B30.Score();
    B31.Score();
    B32.Score();
    B33.Score();
    B34.Score();
    B35.Score();
    B36.Score();
    B37.Score();
    B38.Score();
    B39.Score();
    B40.Score();
    B41.Score();
    B42.Score();
    B43.Score();
    B44.Score();
    B45.Score();
    B46.Score();
    B47.Score();
    B48.Score();
    B49.Score();
    B50.Score();
    B51.Score();
    B52.Score();
    B53.Score();
    B54.Score();
    B55.Score();
    B56.Score();

}

function mouseDragged(){
    Matter.Body.setPosition(P.body,{x: mouseX, y:mouseY } );
}

function mouseReleased(){
   slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(P.body);
    }
}

async    function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    
    var date_time =  responseJson.datetime;
    var update_time = date_time.slice(11,13);

    if(update_time>13){
        bg2 = loadImage("bg2.jpg");
    }
    else{
        bg2 = loadImage("background.jpg");
    }


    console.log(update_time);

    }