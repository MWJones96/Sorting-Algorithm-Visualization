class SortingAlgorithm {
    constructor(size=256) {
        this.arr = [...Array(width).keys()];
        this.shuffle();
    }

    swap(a, b) {
        var temp = this.arr[a];
        this.arr[a] = this.arr[b];
        this.arr[b] = temp;
    }

    shuffle() {
        var currentIndex = this.arr.length;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          var randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          var temporaryValue = this.arr[currentIndex];
          this.arr[currentIndex] = this.arr[randomIndex];
          this.arr[randomIndex] = temporaryValue;
        }
    }

    sortStep() {
        throw 'Unimplemented exception'
    }
    isDone() {
        throw 'Unimplemented exception'
    }
    getArray() {
        throw 'Unimplemented exception'
    }
    getKeyIndices() {
        throw 'Unimplemented exception'
    }
};

class BubbleSortingAlgorithm extends SortingAlgorithm {
    i = 0;
    j = 0;
    swapped = false;
    done = false;

    constructor(size=256) {
        super(size);
    }

    sortStep() {
        if (this.j == 0) {
            this.swapped = false;
        }
    
        if (this.arr[this.j] > this.arr[this.j+1]) {
            this.swap(this.j, this.j + 1);
            this.swapped = true;
        }
    
        if (this.i == this.arr.length || (this.j == this.arr.length && !this.swapped)) {
            this.done = true;
        }
    
        if (this.j == this.arr.length) {
            this.i += 1;
            this.j = 0;
        } else {
            this.j += 1;
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

};