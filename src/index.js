import SortingGraph from "./scripts/sorting_graph";
import BubbleSort from "./scripts/sorting_algorithms/bubble_sort"
import SelectionSort from "./scripts/sorting_algorithms/selection_sort"
import Nav from "./scripts/nav/nav";

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded");

    const graph = new SortingGraph(5)
    console.log("bars made");
    console.log(graph.elements)
    const nav = new Nav(graph, 1000, "bubblesort");

    const speedSlider = document.getElementById("speedSlider")
    speedSlider.addEventListener("input", event => {
        nav.updateSpeed(parseInt(speedSlider.value));
        // currentSpeed = speedSlider.value;
        // sortalgo.updateSpeed(parseInt(currentSpeed));
    })

 
    const arraySize = document.getElementById("arraySize")
    arraySize.addEventListener("input", event => {
        nav.updateArraySize(arraySize.value);
        // currentArraySize = arraySize.value;
        // console.log(currentArraySize)
        // graph.reset(currentArraySize)
    })

    const playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", event => {
        event.preventDefault();
        nav.handlePlayBtn();
        if (playBtn.innerHTML === "Play") {
            playBtn.innerHTML = "Pause";
            nav.pause();
        } else {
            playBtn.innerHTML = "Play"
        }
        // currentAlgo();
    })

    const resetBtn = document.getElementById("resetBtn")
    resetBtn.addEventListener("click", event => {
        event.preventDefault();
        nav.reset()
    })

    const bubbleSortBtn = document.getElementById("bubbleSortBtn")
    bubbleSortBtn.addEventListener("click", event => {
        event.preventDefault();
        nav.selectBubbleSort();
        // graph.reset(currentArraySize)
        // let algoKey = "bubblesort"
        // let sortalgo = new BubbleSort(graph, currentSpeed)
        // currentAlgo = sortalgo.bubbleSort;
    })

    const selectionSortBtn = document.getElementById("selectionSortBtn")
    selectionSortBtn.addEventListener("click", event => {
        event.preventDefault();
        nav.selectSelectionSort();
        // graph.reset(currentArraySize)
        // let algoKey = "selectionsort"
        // let sortalgo = new SelectionSort(graph, currentSpeed)
        // currentAlgo=sortalgo.selectionSort;
    })

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

var canvas = document.getElementById("panningCanvas");
var ctx = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;
 
var img = new Image();
img.src = "resized-galaxy-bg.jpeg";
 
window.onload = function() {
    var imgHeight = 0;
    var scrollSpeed = 2.5;
 
    function loop() {
        ctx.drawImage(img, 0, imgHeight);
        ctx.drawImage(img, 0, imgHeight - canvas.height);
 
        imgHeight += scrollSpeed;
 
        if (imgHeight == canvas.height)
            imgHeight = 0;

        window.requestAnimationFrame(loop);
    }

    loop();
 
}