

export default class Sort {
    constructor(graph) {
        this.elements = graph.elements;
        this.steps = 0;
        this.iterations = 0;

    }

    // async compare(bar1, bar2) {
    //     // this.highlight(bar1, bar2);
    //     console.log(bar1.value);
    //     console.log(bar2.value);
    //     if (bar1.value > bar2.value) {
    //         await this.sleep();
    //         this.swapBars(bar1, bar2)
    //         return true;
    //     }
    // }

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

    updateSteps() {
        const stepSpan = document.getElementById("steps");
        stepSpan.innerHTML = this.steps;
    }

    updateIterations() {
        const iterationsSpan = document.getElementById("iterations")
        iterationsSpan.innerHTML = this.iterations;
    }

    sleep() {
        return new Promise((resolve) => setTimeout(resolve, 1))
    }
}

// -compare 2 bars by checking their values
// -highlight the bars being compared
// - swap bar values values