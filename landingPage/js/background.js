function setup(){
    createCanvas(windowWidth, windowHeight);
    background('#999');
}

var xPos = 50;
function draw()
{
    superCool(50, 20);
    superCool(100, 40);
    superCool(250, 15);
}

function superCool(yPos, cSize)
{
    for (i = 0; i < 5; i++)
    {
        
        circle(xPos * i - 600, yPos * i - 250, cSize);
        xPos++;
        if( xPos > 900 )
        {
            xPos = -300;
        }
        fill( Math.random() * 255, Math.random() * 255, Math.random() * 255);
        //no stroke looks 1000x better
        noStroke();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}