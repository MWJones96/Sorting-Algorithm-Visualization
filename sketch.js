var sortingAlgorithm = null;
var itemWidth = 20;
var numItems = 32;
var maxValue = 32;

function setup() {
    let width = numItems * itemWidth;
    var height = maxValue * itemWidth + 25;

    createCanvas(width, height);

    let array = [...Array(numItems)];
    for(let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (maxValue + 1));
    }

    textSize(16);
    textAlign(CENTER, CENTER);

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
        rect(i*itemWidth, height - (arr[i] * itemWidth), itemWidth, arr[i] * itemWidth);
        text(arr[i], (i * itemWidth) + itemWidth / 2, height - (arr[i] * itemWidth) - 10);
    }
}

function drawSpecialIndices(arr, indices) {
    var key_indices = sortingAlgorithm.getKeyIndices();

    for (var i = 0; i < key_indices.length; i++) {
        var indice = key_indices[i];
        fill(0, 255, 0);
        rect(indice*itemWidth, height - (arr[indice] * itemWidth), itemWidth, arr[indice] * itemWidth);
    }
}