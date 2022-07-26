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
        if (playBtn.innerHTML === "Play") {
            playBtn.innerHTML = "Pause";
        } else {
            playBtn.innerHTML = "Play"
        }

        const sortalgo = new BubbleSort(graph)
        sortalgo.bubblesort();
    })

    // const bubbleSortBtn = document.getElementById("bubbleSortBtn")
    // bubbleSortBtn.addEventListener("click", event => {
    //     event.preventDefault();
    //     bubbleSortBtn.classList.add("selected");
    //     graph.reset(arrayNum)
    //     let sortalgo = new BubbleSort(graph)
    // })

    // const mergeSortBtn = document.getElementById("mergeSortBtn")
    // mergeSortBtn.addEventListener("click", event => {
    //     event.preventDefault();
    //     mergeSortBtn.classList.add("selected");
    //     graph.reset(arrayNum)
    //     let sortalgo = new mergeSortBtn(graph)
    // })

    // const quickSortBtn = document.getElementById("quickSortBtn")
    // quickSortBtn.addEventListener("click", event => {
    //     event.preventDefault();
    //     quickSortBtn.classList.add("selected");
    //     graph.reset(arrayNum)
    //     let sortalgo = new QuickSort(graph)
    // })
    
})