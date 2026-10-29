# Sorting Algorithm Visualization

Animated visualisations of sorting algorithms, written with [p5.js](https://p5js.org).

## Overview

The page draws an array of 32 random integers (0 to 32) as a bar chart, labels each bar with its value, and animates the array as it is sorted. The algorithm's name appears above the canvas, along with running counts of swaps and comparisons.

## Features

- **Bubble sort**: complete. Steps through the array with a 20 ms delay between comparisons, highlights the elements being compared in green, and stops early once a pass makes no swaps.
- **Merge sort**: in progress. See [Status](#status).
- Live counters for swaps and comparisons.

## Tech stack

- JavaScript (ES2017 classes and `async`/`await`)
- p5.js 1.1.9, loaded from the jsDelivr CDN

## Getting started

Open `index.html` in a web browser. An internet connection is needed to load p5.js.

## Usage

The algorithm is chosen in `setup()` in `sketch.js`. The default is merge sort; to watch bubble sort, change

```js
sortingAlgorithm = new MergeSortingAlgorithm(array);
```

to

```js
sortingAlgorithm = new BubbleSortingAlgorithm(array);
```

and reload the page. The array size, bar width and maximum value are set by `numItems`, `itemWidth` and `maxValue` at the top of `sketch.js`.

To add an algorithm, extend `SortingAlgorithm` in `sort.js` and implement `sort()`, `getArray()`, `getKeyIndices()` (the indices to highlight) and `getSortAlgorithmName()`.

## Project structure

```
index.html   Loads p5.js and the scripts; shows the algorithm name and counters
sketch.js    p5.js setup and draw loop: creates the array and draws the bars
sort.js      SortingAlgorithm base class with bubble sort and merge sort
helper.js    swap, shuffle and sleep helpers
```

## Status

Work in progress. Merge sort, the current default, does not yet sort correctly: it splits the array at fractional indices and does not wait for its recursive calls, so values are lost from the array during the animation. It also does not update the swap and comparison counters. Bubble sort works as described.
