import Bar from "./bars"

export default class SortingGraph {
    constructor(numBars) {
        this.sortingGraph = document.getElementById("sorting_graph");
        this.sortingGraph.style.height = "700px";
        this.sortingGraph.style.width = "700px";
        this.elements = [];
        this.numBars = numBars;

        this.reset(numBars);

        this.removeAllBars = this.removeAllBars.bind(this);
    }

    reset(numBars) {
        this.removeAllBars();
        console.log("resetting")
        for (let i =0; i < numBars; i++) {
            console.log("making bars")
            let height = Math.floor(Math.random() * 100);
            let width = (1/numBars * 100)

            this.elements.push(new Bar(height, width, this.sortingGraph))
        }
    }

    removeAllBars() {
        while (this.sortingGraph.firstChild) {
            console.log("removing")
            this.sortingGraph.removeChild(this.sortingGraph.firstChild);
        }
    }
    
    

}