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

    if (!bubbleDone(array)) {
        for (var step = 0; step < 10; step++) {
            bubbleStep(array);
        }
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

/*
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var swapped = false;

        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}*/

var i = 0;
var j = 0;
var swapped = false;
var done = false;

function bubbleStep(arr) {
    if (j == 0) {
        swapped = false;
    }

    if (arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
        swapped = true;
    }

    if (i == arr.length || (j == arr.length && !swapped)) {
        done = true;
    }

    if (j == arr.length) {
        i += 1;
        j = 0;
    }

    j += 1;
}

function bubbleDone(arr) {
    return done;
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}