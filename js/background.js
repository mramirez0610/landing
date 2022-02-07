let mainArray = [];
let count = 20;
var xoff1 = 0;
var xoff2 = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    noStroke();
    frameRate(60);

    for (let y = 0; y < count; y++) {
        mainArray[y] = new coolCircle();
    }
}

function draw() {
    background("#FFFCF5");
    circleSetup(); 
}

function showModal(){
    const modal = document.getElementById("modal");

    if (modal.className === "noModal") {
        modal.className = "modal";
    } else {
        modal.className = "noModal";
    }
}

function circleSetup() {
    //const junk = [ "#BFC3BA", "#A9ACA9", "#60495A", "#3F3244", "#2F2235" ];
    const junk = [ "#F3E9E9", "#E4D0CF", "#A3BBCE", "#3F5178", "#D3E5EE" ];
    const colorList = [...junk, ...junk, ...junk, ...junk];

    //creates a circle for every entry in the array
    for (var q = 0; q < colorList.length; q++) {
        var curColor = color(colorList[q]);
        curColor.setAlpha(190);
        fill(curColor);

        mainArray[q].create();
        mainArray[q].float();
        mainArray[q].rules();
    }
}

class coolCircle {
    constructor() {
        this.d = random(60, 250);
        //literally just found out about the noise function this is fucking cool
        this.x = map(noise(xoff1), 0, 1, 10, width)
        this.y = map(noise(xoff2), 0, 1, 10, height) 
        xoff1 += .1;
        xoff2 += 2;
        this.speed = 0;
    }
    //this looks fucking gross, but it works! doesnt let it go too fast
    float() {
        if (this.speed <= 1) {
            this.y += this.speed;
            this.x += this.speed / 2;
            this.speed -= this.d / 25000;
        }
        //caps it out at requested speed
        if (this.speed <= -4) {
            this.speed += this.d / 25000;
        }
    }
    rules() {
        if (this.y < -200) {
            this.y = height + 100;
        }
        if (this.x < - 200){
            this.x = width + 150;
        }
    }
    create() {
        circle(this.x, this.y, this.d);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}