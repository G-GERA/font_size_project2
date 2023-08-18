function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 400);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

 function modelLoaded()
{
    console.log("poseNet is initilized");

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background("#f7bbb7");
}