import SortingGraph from "../sorting_graph";
import Sort from "../sorting_algorithms/sort";
import BubbleSort from "../sorting_algorithms/bubble_sort";
import SelectionSort from "../sorting_algorithms/selection_sort";

export default class Nav {
    constructor(graph, speed, algo) {
        this.graph = graph;
        this.speed = speed;
        this.algo = algo;
        this.displayCurrentAlgo();
        this.sorter = new BubbleSort(this.graph, this.speed)
        this.sorter.describeBubbleSort();
        this.sorter.updateSteps();
        this.sorter.updateIterations();
        this.arraySize = 5;
        this.isSorting = false;
    }

    async handlePlayBtn() {
        if (this.algo === "Bubble Sort" && this.isSorting === false) {
            this.sorter = new BubbleSort(this.graph, this.speed)
            this.isSorting = true;
            await this.sorter.bubbleSort();
            this.isSorting = false;
            this.updatePlayBtn();
        } else if (this.algo === "Selection Sort" && this.isSorting === false) {
            this.sorter = new SelectionSort(this.graph, this.speed)
            this.isSorting = true;  
            await this.sorter.selectionSort();
            this.isSorting = false;
            this.updatePlayBtn();
        }
    }

    reset() {
        this.graph.reset(this.arraySize);
        this.sorter.forceQuit = true;
        this.sorter.steps = 0;
        this.sorter.iterations = 0;
        this.sorter.updateSteps();
        this.sorter.updateIterations();
        this.updatePlayBtn();
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

    updatePlayBtn() {
        let playBtn = document.getElementById("playBtn");
        playBtn.innerHTML = "Play";
    }
    selectBubbleSort() {
        // this.forceQuit();
        this.reset();
        this.algo = "Bubble Sort";
        this.displayCurrentAlgo();
        this.sorter = new BubbleSort(this.graph, this.speed);
        this.sorter.describeBubbleSort();
    }

    selectSelectionSort() {
        // this.forceQuit();
        this.reset();
        this.algo = "Selection Sort"
        this.displayCurrentAlgo();
        this.sorter = new SelectionSort(this.graph, this.speed)
        this.sorter.describeSelectionSort();
    }

    forceQuit() {
        this.sorter.forceQuit = true;
    }

    displayCurrentAlgo() {
        let algoSpan = document.getElementById("currentAlgo")
        algoSpan.innerHTML = this.algo;
    }

    

}