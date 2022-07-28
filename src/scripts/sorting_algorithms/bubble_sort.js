import Sort from "./sort";

export default class bubbleSort extends Sort{
    constructor(graph, speed) {
        super(graph, speed); // this.elements, this.steps, this.iterations, this.speed
        this.bubbleSort = this.bubbleSort.bind(this);
    }

    async bubbleSort() {
        this.isSorting = true;
        let sorted = false;

        while(!sorted) {
            sorted = true;
            this.iterations++;
            for (let i = 0; i < this.elements.length - 1; i++) {
                if (this.forceQuit === true) {
                    return;
                }
                this.steps++;
                this.highlight(this.elements[i], this.elements[i + 1])

                if (this.elements[i].value > this.elements[i + 1].value) {
                    await this.sleep();
                    this.swapBars(this.elements[i], this.elements[i + 1]);
                    sorted = false;
                }
                
                await this.sleep();
                this.unhighlight(this.elements[i], this.elements[i + 1])
                this.updateSteps();
                this.updateIterations();
            }

        }
        this.finished();
    }

    description() {

    }
}
