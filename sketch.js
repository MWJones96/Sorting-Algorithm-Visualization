var array = null;

function setup() {
    createCanvas(400, 400);
    array = shuffle([...Array(width).keys()]);
}

function draw() {
    background(0);
    stroke(255);
    for (var i = 0; i < array.length; i++) {
        line(i, height, i, height - array[i]);
    }

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}