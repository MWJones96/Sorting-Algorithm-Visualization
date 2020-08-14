class SortingAlgorithm {
    constructor(arr, delay=20, start=-1, end=-1) {
        this.arr = arr;
        this.delay = delay;
        this.start = (start == -1) ? 0 : start;
        this.end = (end == -1) ? arr.length - 1 : end;
    }

    async sort() {
        throw 'Unimplemented exception';
    }
    getArray() {
        throw 'Unimplemented exception';
    }
    getKeyIndices() {
        throw 'Unimplemented exception';
    }
    getSortAlgorithmName() {
        throw 'Unimplemented exception';
    }
};

class BubbleSortingAlgorithm extends SortingAlgorithm {
    i = -1;
    j = -1;

    constructor(arr) {
        super(arr);
    }

    async sort() {
        for (this.i = this.start; this.i < this.end; this.i++) {
            let swapped = false;

            for (this.j = this.start; this.j < this.end; this.j++) {
                if (this.arr[this.j] > this.arr[this.j+1]) {
                    swap(this.arr, this.j, this.j + 1);
                    swapped = true;
                }

                await sleep(this.delay);
            }

            if (!swapped) {
                break;
            }
        }
    }

    getArray() {
        return this.arr;
    }

    getKeyIndices() {
        return [this.i, this.j, this.j + 1];
    }

    getSortAlgorithmName() {
        return 'Bubble Sort';
    }
};

class MergeSortingAlgorithm extends SortingAlgorithm {
    constructor(arr, start=-1, end=-1) {
        super(arr, start, end);
    }

    async sort() {

    }

    getArray() {
        return this.arr;
    }

    getKeyIndices() {
    }

    getSortAlgorithmName() {
        return 'Merge Sort';
    }
};