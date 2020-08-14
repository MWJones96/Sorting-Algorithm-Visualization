var sortingAlgorithm = null;
var itemWidth = 10;
var numItems = 64;

function setup() {
    let width = numItems * itemWidth;
    var height = 500;

    createCanvas(width, 500);

    let array = [...Array(numItems)];
    for(let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (height + 1));
    }

    sortingAlgorithm = new BubbleSortingAlgorithm(array);
    document.getElementById('algorithm-name').innerHTML = sortingAlgorithm.getSortAlgorithmName();
    sortingAlgorithm.sort();
}

function draw() {
    background(0);
    var array = sortingAlgorithm.getArray();
    var indices = sortingAlgorithm.getKeyIndices();

    drawArray(array);
    drawSpecialIndices(array, indices);
}

function drawArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        fill(255);
        rect(i*itemWidth, height - arr[i], itemWidth, arr[i]);
    }
}

function drawSpecialIndices(arr, indices) {
    var key_indices = sortingAlgorithm.getKeyIndices();

    for (var i = 0; i < key_indices.length; i++) {
        var indice = key_indices[i];
        fill(255, 0, 0);
        rect(indice*itemWidth, height - arr[indice], itemWidth, arr[indice]);
    }
}