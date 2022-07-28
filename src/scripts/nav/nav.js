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
        } else if (this.algo === "selectionsort" && this.isSorting === false) {
            this.sorter = new SelectionSort(this.graph, this.speed)
            this.isSorting = true;  
            await this.sorter.selectionSort();
        }
        this.isSorting = false;
    }

    pause() {
        
    }

    reset() {
        this.graph.reset(this.arraySize);
        this.sorter.forceQuit = true;
    }

    updateSpeed(speed) {
        this.speed = speed;
        if (this.sorter) this.sorter.updateSpeed(this.speed);
    }

    updateArraySize(arraySize) {
        this.arraySize = arraySize;
        this.graph.reset(arraySize);
        this.sorter.forceQuit = true;
    }

    selectBubbleSort() {
        this.algo = "bubblesort";
    }

    selectSelectionSort() {
        this.algo = "selectionsort"
    }

    

}