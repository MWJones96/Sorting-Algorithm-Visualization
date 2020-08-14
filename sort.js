class SortingAlgorithm {
    constructor(arr, start=-1, end=-1) {
        this.arr = arr;
        this.start = (start == -1) ? 0 : start;
        this.end = (end == -1) ? arr.length - 1 : end;
    }

    sortStep() {
        throw 'Unimplemented exception';
    }
    isDone() {
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
    i = this.start;
    j = this.start;
    swapped = false;
    done = false;

    constructor(arr) {
        super(arr);
    }

    sortStep() {
        if (this.j == 0) {
            this.swapped = false;
        }
    
        if (this.arr[this.j] > this.arr[this.j+1]) {
            swap(this.arr, this.j, this.j + 1);
            this.swapped = true;
        }
    
        if (this.i == this.end + 1 || (this.j == this.end + 1 && !this.swapped)) {
            this.done = true;
        }
    
        if (this.j == this.end + 1) {
            this.i++;
            this.j = this.start;
        } else {
            this.j++;
        }
    }

    isDone() {
        return this.done;
    }

    getArray() {
        return this.arr;
    }

    getKeyIndices() {
        return [this.i, this.j];
    }

    getSortAlgorithmName() {
        return 'Bubble Sort';
    }
};

class MergeSortingAlgorithm extends SortingAlgorithm {

};