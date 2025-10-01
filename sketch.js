let failGif;

function preload()
{
failGif = loadImage("fail.gif");
}

function setup()
{
createCanvas (400,800);
}

function draw()
{
background (0); 
image (failGif,0,0);
}