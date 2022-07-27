import SortingGraph from "../sorting_graph";
import Sort from "../sorting_algorithms/sort";
import BubbleSort from "../sorting_algorithms/bubble_sort";
import SelectionSort from "../sorting_algorithms/selection_sort";

export default class Nav {
    constructor(graph, speed, algo) {
        this.graph = graph;
        this.speed = speed;
        this.algo = algo;
        this.arraySize = 5;
        this.isSorting = false;
    }

    handlePlayBtn() {
        if (this.algo === "bubblesort" && this.isSorting === false) {
            this.sorter = new BubbleSort(this.graph, this.speed)
            this.sorter.bubbleSort();
            this.isSorting = true;
        } else if (this.algo === "selectionsort" && this.isSorting === false) {
            this.sorter = new SelectionSort(this.graph, this.speed)
            this.sorter.selectionSort();
            this.isSorting = true;  
        }
    }

    reset() {
        this.graph.reset(this.arraySize);
    }

    updateSpeed(speed) {
        this.speed = speed;
        if (this.sorter) this.sorter.updateSpeed(this.speed);
    }

    updateArraySize(arraySize) {
        this.arraySize = arraySize;
        this.graph.reset(arraySize);
    }

    selectBubbleSort() {
        this.algo = "bubblesort";
    }

    selectSelectionSort() {
        this.algo = "selectionsort"
    }

    

}