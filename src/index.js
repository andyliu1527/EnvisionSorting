import SortingGraph from "./scripts/sorting_graph";
import BubbleSort from "./scripts/sorting_algorithms/bubble_sort"

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded");

    const graph = new SortingGraph(5)
    console.log("bars made");
    console.log(graph.elements)

    const arrayForm = document.getElementById("arraySize");
    arrayForm.addEventListener("submit", event => {
        event.preventDefault();

        const arrayNumInput = document.getElementById("arrayinput")
        const arrayNum = arrayNumInput.value
        console.log(arrayNum)
        graph.reset(arrayNum)
    })

    const playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", event => {
        event.preventDefault();
        const sortalgo = new BubbleSort(graph)
        sortalgo.bubblesort();
    })
})