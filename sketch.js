
var weight = [20, 30, 65, 74]

function average_score (){
  var sum = weight[0]+weight[1]+weight[2]+weight[3]
  avg= sum/ weight.length
  console.log(avg)
}



function setup() 
{
  createCanvas(400,400);
  average_score();
}

function draw() 
{
background(51);

}

