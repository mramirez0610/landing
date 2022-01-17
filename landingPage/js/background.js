let mainArray = [];
let count = 15;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(60);

    for (let y = 0; y < count; y++) {
        mainArray[y] = new coolCircle();
    }
}

function draw() {
    background(100);
    circleSetup(); 
}

function circleSetup() {
    const junk = [ "#BFC3BA", "#A9ACA9", "#60495A", "#3F3244", "#2F2235" ];
    const colorList = [...junk, ...junk, ...junk];

    //creates a circle for every entry in the array
    for (var q = 0; q < colorList.length; q++) {
        var curColor = color(colorList[q]);
        curColor.setAlpha(220);
        fill(curColor);

        mainArray[q].create();
        mainArray[q].float();
        mainArray[q].rules();
    }
}

class coolCircle {
    constructor() {
        this.d = random(40, 200);
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.speed = 0;
    }

    //this looks fucking gross, but it works! doesnt let it go too fast
    float() {
        if (this.speed <= 15) {
            this.y += this.speed;
            this.speed -= this.d / 20000;
        }
        if (this.speed <= -15) {
            this.y += this.speed
            this.speed += 20;
        }
    }
    rules() {
        if (this.y < -200) {
            this.y = height + 100;
        }
    }
    create() {
        circle(this.x, this.y, this.d);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}