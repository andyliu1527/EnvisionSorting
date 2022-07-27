import Sort from "./sort";

export default class SelectionSort extends Sort{
    constructor(graph) {
        super(graph);
        this.selectionSort = this.selectionSort.bind(this)
    }

    async selectionSort() {
        for (let i = 0; i < this.elements.length; i++) {
            let min = i;
            
            this.iterations++;
            this.updateIterations();

            for (let j = i + 1; j < this.elements.length; j++) {

                this.steps++;
                this.updateSteps();
                this.highlight(this.elements[min], this.elements[j])
                await this.sleep();
                this.unhighlight(this.elements[min], this.elements[j])

                if (this.elements[min].value > this.elements[j].value) {
                    min = j;
                }

            }
            await this.sleep();
            if (min != i) {
                this.swapBars(this.elements[i], this.elements[min]);
            }
        }
        this.finished();
    }

}