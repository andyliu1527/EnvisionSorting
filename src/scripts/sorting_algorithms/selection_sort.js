import Sort from "./sort";

export default class SelectionSort extends Sort{
    constructor(graph, speed) {
        super(graph, speed);
        this.selectionSort = this.selectionSort.bind(this)
    }

    async selectionSort() {
        for (let i = 0; i < this.elements.length; i++) {
            let min = i;
            
            this.iterations++;
            this.updateIterations();

            for (let j = i + 1; j < this.elements.length; j++) {
                if (this.forceQuit === true) {
                    return;
                }
                this.steps++;
                this.updateSteps();
                this.highlight(this.elements[min], this.elements[j])
                await this.sleep();
                this.unhighlight(this.elements[min], this.elements[j])

                if (this.elements[min].value > this.elements[j].value) {
                    min = j;
                }

            }
            if (min != i) {
                this.swapHighlight(this.elements[i], this.elements[min])
                await this.sleep();
                this.swapBars(this.elements[i], this.elements[min]);
                this.unhighlight(this.elements[i], this.elements[min])
            }
        }
        this.finished();
    }

    describeSelectionSort() {
        let description = document.getElementById("describe")
        description.innerHTML = "Selection sort is a simple sorting algorithm uses a pair of nested for loops, keeping track of a 'sorted array' and the unsorted array. For every iteration of the out for loop, selection sort will look for the next smallest element and append it to the beginning of the 'sorted array'."
    }
}