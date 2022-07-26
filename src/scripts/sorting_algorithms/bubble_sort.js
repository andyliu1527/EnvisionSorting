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
                // console.log(this.elements[i].value);
                // console.log(this.elements[i+1].value);
                // console.log(this.elements)
                // console.log("-----------")
                this.highlight(this.elements[i], this.elements[i + 1])
                if (this.elements[i].value > this.elements[i + 1].value) {
                    await this.sleep();
                    this.swapBars(this.elements[i], this.elements[i + 1]);
                    // [this.elements[i], this.elements[i + 1]] = [this.elements[i + 1], this.elements[i]]
                    sorted = false;
                }
                await this.sleep();
                this.unhighlight(this.elements[i], this.elements[i + 1])
            }
        }
        console.log("finished");
    }
}
