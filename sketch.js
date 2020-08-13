var sortingAlgorithm = null;
var size = 512;

function setup() {
    createCanvas(size, size);

    sortingAlgorithm = new BubbleSortingAlgorithm(size);
}

function draw() {
    background(0);
    var array = sortingAlgorithm.getArray();

    for (var i = 0; i < size; i++) {
        stroke(255);
        strokeWeight(1);
        line(i, height, i, height - array[i]);
    }

    var key_indices = sortingAlgorithm.getKeyIndices();

    if (!sortingAlgorithm.isDone()) {
        for (var i = 0; i < key_indices.length; i++) {
            var indice = key_indices[i];
            stroke(0, 255, 0);
            strokeWeight(1);
            line(indice, height, indice, height - array[indice]);
        }
    }

    var num_steps = size / 2;
    
    if (!sortingAlgorithm.isDone()) {
        for (var i = 0; i < num_steps; i++) {
            sortingAlgorithm.sortStep();
        }
    }
}