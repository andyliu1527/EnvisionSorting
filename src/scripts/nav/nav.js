import SortingGraph from "../sorting_graph";
import Sort from "../sorting_algorithms/sort";
import BubbleSort from "../sorting_algorithms/bubble_sort";
import SelectionSort from "../sorting_algorithms/selection_sort";

export default class Nav {
    constructor(graph, speed, algo) {
        this.graph = graph;
        this.speed = speed;
        this.algo = algo;
        this.sorter = new BubbleSort(this.graph, this.speed)
        this.arraySize = 5;
        this.isSorting = false;
    }

    async handlePlayBtn() {
        if (this.algo === "bubblesort" && this.isSorting === false) {
            this.sorter = new BubbleSort(this.graph, this.speed)
            this.isSorting = true;
            await this.sorter.bubbleSort();
            this.isSorting = false;
        } else if (this.algo === "selectionsort" && this.isSorting === false) {
            this.sorter = new SelectionSort(this.graph, this.speed)
            this.isSorting = true;  
            await this.sorter.selectionSort();
            this.isSorting = false;
        }
        let playBtn = document.getElementById("playBtn");
        playBtn.innerHTML = "Play";
    }

    reset() {
        this.graph.reset(this.arraySize);
        this.sorter.forceQuit = true;
        this.sorter.steps = 0;
        this.sorter.iterations = 0;
        let playBtn = document.getElementById("playBtn");
        playBtn.innerHTML = "Play";
    }

    updateSpeed(speed) {
        this.speed = speed;
        if (this.sorter) this.sorter.updateSpeed(this.speed);
    }

    updateArraySize(arraySize) {
        this.arraySize = arraySize;
        this.reset();
        this.sorter.forceQuit = true;
    }

    selectBubbleSort() {
        this.algo = "bubblesort";
    }

    selectSelectionSort() {
        this.algo = "selectionsort"
    }

    forceQuit() {
        this.sorter.forceQuit = true;
    }

    

}