var sortingAlgorithm = null;

function setup() {
    let width = 512;
    let height = 376;

    createCanvas(width, height);

    let array = [...Array(width)];
    for(let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (height + 1));
    }

    sortingAlgorithm = new BubbleSortingAlgorithm(array);
}

function draw() {
    background(0);
    var array = sortingAlgorithm.getArray();
    var indices = sortingAlgorithm.getKeyIndices();

    drawArray(array);
    drawSpecialIndices(array, indices);
    sortSteps(array.length/2);
}

function drawArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        stroke(255);
        strokeWeight(1);
        line(i, height, i, height - arr[i]);
    }
}

function drawSpecialIndices(arr, indices) {
    var key_indices = sortingAlgorithm.getKeyIndices();

    if (!sortingAlgorithm.isDone()) {
        for (var i = 0; i < key_indices.length; i++) {
            var indice = key_indices[i];
            stroke(255, 0, 0);
            strokeWeight(1);
            line(indice, height, indice, height - arr[indice]);
        }
    }
}

function sortSteps(num_steps) {
    if (!sortingAlgorithm.isDone()) {
        for (var i = 0; i < num_steps; i++) {
            sortingAlgorithm.sortStep();
        }
    }
}