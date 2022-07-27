export default class Sort {
    constructor(graph, speed) {
        this.elements = graph.elements;
        this.steps = 0;
        this.iterations = 0;
        this.speed = speed;

    }

    updateSpeed(speed) {
        this.speed = speed;
    }

    highlight(bar1, bar2) {
        bar1.barDiv.style.backgroundColor="red";
        bar2.barDiv.style.backgroundColor="red";
    }

    unhighlight(bar1, bar2) {
        // bar1.barDiv.style.backgroundColor="rgb(79, 149, 149)";
        // bar2.barDiv.style.backgroundColor="rgb(79, 149, 149)";
        bar1.barDiv.style.backgroundColor= "white";
        bar2.barDiv.style.backgroundColor="white";
    }

    swapBars(bar1, bar2) {
        let temp = bar1.value;

        bar1.value = bar2.value;
        bar1.barDiv.innerHTML = bar2.value

        bar2.value = temp;
        bar2.barDiv.innerHTML = temp;

        bar1.barDiv.style.height = `${bar1.value}%`
        bar2.barDiv.style.height = `${bar2.value}%`
    }

    finished() {
        this.elements.forEach(bar => {
            bar.barDiv.style.backgroundColor="rgb(50, 253, 50)"
        });
    }

    updateSteps() {
        const stepSpan = document.getElementById("steps");
        stepSpan.innerHTML = this.steps;
    }

    updateIterations() {
        const iterationsSpan = document.getElementById("iterations")
        iterationsSpan.innerHTML = this.iterations;
    }

    sleep() {
        console.log(this.speed)
        return new Promise((resolve) => setTimeout(resolve, this.speed))
    }
}
