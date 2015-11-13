//=========================================
//  Streets sorted by number of complaints
//=========================================

var complaints;
var sortedStreets;
var whichStreet = 0;


function preload(){
    complaints = loadJSON("data/complaints.json");
}

function setup() {

    //Make the canvas and then insert it into a div
    createCanvas(windowWidth, windowHeight);
    background("white");
    textAlign(CENTER);

   //count the complaints per street
    var streets = {};
    for (var i = 0; i < complaints.data.length; i++) {
        var streetName = complaints.data[i][12];
        streetName = streetName.trim();
        streets[streetName] = 1 + (streets[streetName] || 0);
    }

    //sort them
    sortedStreets = sortHighLow(streets);

}

function draw() {

    background("#E6EBE0");
    textSize(50);

    if(sortedStreets[whichStreet][0].indexOf("STREET") > -1){
      for(var i = 0; i < 400; i++){
            line(0, i * 5, 2000, i * 5);
          }
    } else{
      for(var i = 0; i < 400; i++){
            line(i * 5, 0, i * 5, 2000);
          }
    }

    fill("#5CA4A9");
    text("There have been",windowWidth/2,windowHeight/2);

    fill("#ED6A5A");
    text(sortedStreets[whichStreet][1],windowWidth/2,windowHeight/2+50);

    fill("#5CA4A9");
    text("complaints about",windowWidth/2,windowHeight/2+100);

    fill("#ED6A5A");
    text(sortedStreets[whichStreet][0],windowWidth/2,windowHeight/2+160);



}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if(whichStreet !==sortedStreets.length-1){
        whichStreet++;
    }

  } else if (keyCode === UP_ARROW) {
    if(whichStreet !== 0){
        whichStreet--;
    }
  }
}
