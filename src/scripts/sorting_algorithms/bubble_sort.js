import Sort from "./sort";

export default class bubbleSort extends Sort{
    constructor(graph) {
        super(graph); // this.elements, this.steps, this.iterations
    }

    async bubblesort() {
        let sorted = false;
        while(!sorted) {
            sorted = true;
            this.iterations++;
            for (let i = 0; i < this.elements.length - 1; i++) {
                this.steps++;
                if (bar1.value > bar2.value) {
                    await this.sleep();
                    this.swapBars(bar1, bar2)
                }
            }
            
        }
    }
}
