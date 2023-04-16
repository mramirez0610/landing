let mainArray = [];
let xoff1 = 0;
let xoff2 = 10;
const count = 20;
cur = ["#BEEF9E", "#A6C364", "#4D5F2E", "#335145", "#1E352F"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    noStroke();
    frameRate(60);

    const colorOptions = [
        {
            "title": "default",
            "palette": ["#BEEF9E", "#A6C364", "#4D5F2E", "#335145", "#1E352F"]
        },
        {
            "title": "plum",
            "palette": ["#BFC3BA", "#A9ACA9", "#60495A", "#3F3244", "#2F2235"]
        },
        {
            "title": "cateatinpizza",
            "palette": ["#B00B69", "#E2C2C6", "#B9929F", "#160F29", "#246A73"]
        },
        {
            "title": "goblin engineer",
            "palette": ["#D9CFC3", "#868491", "#B0AEBF", "#E6FFF7", "#757480"]
        },
        {
            "title": "pretty : )",
            "palette": ["#F3E9E9", "#E4D0CF", "#A3BBCE", "#3F5178", "#D3E5EE"]
        },
        {
            "title": "cauldron",
            "palette": ["#E0F2E9", "#CEB5A7", "#A17C6B", "#5B7B7A", "#3C887E"]
        }
    ];

    const linkList = [
        {
            "id" : "0",
            "name": "youtube",
            "href": "https://www.youtube.com/@windexconsumer"
        },
        {
            "id" : "1",
            "name": "github",
            "href": "https://github.com/mramirez0610"
        },
        {
            "id" : "2",
            "name": "portfolio",
            "href": "https://mramirez0610.github.io/portfolio"
        },
        {
            "id" : "3",
            "name": "pretzelWR",
            "href": "https://recordsetter.com/world-record/pretzels-sticks-stuck-out-mouth/55805"
        }
    ];

    /* 
    -- creating links for socials dynamically using map function
    extreme awesome text block woohoo. i wish there was a better way to do this --
    */
    const nav = document.getElementById("nav")
    const navLinks = linkList.map((x) => {
        const link = document.createElement("div");
        const anchor = document.createElement("a")
        let linkText = document.createTextNode(x.name);
        anchor.setAttribute("href", x.href);
        link.classList.add("navItem");
        
        link.classList.add("navAni");
        anchor.appendChild(linkText);
        link.appendChild(anchor);
        nav.appendChild(link);
    })
    /*
    -- creating the modal options dynamically --
    */
    const grid = document.getElementById("grid");
    const modal = document.getElementById("modal")
    const button = colorOptions.map((m) => {
        const select = document.createElement("button");
        select.addEventListener('click', change);
        select.dataset.palette = m.palette;
        select.classList.add("button");
        let text = document.createTextNode(m.title);
        select.appendChild(text);
        grid.appendChild(select);
        modal.appendChild(grid)
    });

    for (let y = 0; y < count; y++) {
        mainArray[y] = new coolCircle();
    };
};

function draw() {
    background("#FFFCF5");
    circleSetup(); 
};

const change = (event) => {
    //i can't help but think "did i make this harder on myself ?"
    //but then i stop thinking about that, because i'd have to delete 
    //the past hour of work, then i'll feel like a dumbass
    const p = event.target.dataset.palette;
    const v = p.toString();
    const w = [0, 8, 16, 24, 32].map((o) => {return v.slice(o, o+7)});
    console.log(w[0]);
    cur = w;
};

const showModal = () => {
    if (modal.className == "noModal") { modal.className = "modal";} 
    else { modal.className = "noModal"; };
};

function circleSetup() {
    const colorList = [...cur, ...cur, ...cur, ...cur];

    //creates a circle for every entry in the array
    for (let q = 0; q < colorList.length; q++) {
        var curColor = color(colorList[q]);
        curColor.setAlpha(190);
        fill(curColor);
 
        mainArray[q].create();
    };
};

class coolCircle {
    constructor() {
        this.d = random(60, 250);
        //literally just found out about the noise function this is cool
        this.x = random(0, windowWidth - 100)
        this.y = random(0, windowHeight - 100)
        xoff1 += .1;
        xoff2 += 2;
        this.speed = 0;
    };
    //this looks fucking gross, but it works! doesnt let it go too fast
    float() {
        if (this.speed <= 1) {
            this.y += this.speed;
            this.x += this.speed / 2;
            this.speed -= this.d / 25000;
        };
        //caps it out at requested speed
        if (this.speed <= -4) { this.speed += this.d / 25000; };
    };
    rules() {
        if (this.y < -200) { this.y = height + 100; };

        if (this.x < - 200){ this.x = width + 150; };
    };
    create() { circle(this.x, this.y, this.d); this.float(); this.rules();};
};

function windowResized() { resizeCanvas(windowWidth, windowHeight); };