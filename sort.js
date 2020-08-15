class SortingAlgorithm {
    constructor(arr, delay=20, start=-1, end=-1) {
        this.arr = arr;
        this.delay = delay;
        this.start = (start == -1) ? 0 : start;
        this.end = (end == -1) ? arr.length - 1 : end;

        this.swaps = 0;
        this.comparisons = 0;
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
                this.comparisons++;
                if (this.arr[this.j] > this.arr[this.j+1]) {
                    this.swaps++;
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
    constructor(arr, delay=50, start=-1, end=-1) {
        super(arr, delay, start, end);
    }

    async sort() {
        if (this.end <= this.start) {
            return;
        }
        
        let midIndex = this.start + ((this.end - this.start) / 2);

        let leftSide = new MergeSortingAlgorithm(this.arr, this.delay, this.start, midIndex - 1);
        let rightSide = new MergeSortingAlgorithm(this.arr, this.delay, midIndex, this.end);

        leftSide.sort();
        rightSide.sort();

        let left = leftSide.getArray();
        let right = rightSide.getArray();

        let leftPtr = leftSide.start;
        let rightPtr = rightSide.start;

        for (let i = this.start; i <= this.end; i++) {
            if (leftPtr > leftSide.end && rightPtr > rightSide.end) {
                break;
            } else if (leftPtr > leftSide.end) {
                this.arr[i] = right[rightPtr++];
            } else if (rightPtr > rightSide.end) {
                this.arr[i] = left[leftPtr++];
            } else {
                let leftVal = left[leftPtr];
                let rightVal = right[rightPtr];

                if (leftVal < rightVal) {
                    this.arr[i] = left[leftPtr++];
                } else {
                    this.arr[i] = right[rightPtr++];
                }
            }

            await sleep(this.delay);
        }
    }

    getArray() {
        return this.arr.slice(this.start, this.end + 1);
    }

    getKeyIndices() {
        return [];
    }

    getSortAlgorithmName() {
        return 'Merge Sort';
    }
};