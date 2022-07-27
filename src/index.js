import SortingGraph from "./scripts/sorting_graph";
import BubbleSort from "./scripts/sorting_algorithms/bubble_sort"
import SelectionSort from "./scripts/sorting_algorithms/selection_sort"

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded");

    const graph = new SortingGraph(5)
    let currentAlgo;
    let currentArraySize;
    let currentSpeed;
    console.log("bars made");
    console.log(graph.elements)

    // const speedSlider = document.getElementById("speedSlider")
    // speedSlider.addEventListener("input", event => {
    //     currentSpeed = speedSlider.value;
    //     sortalgo.updateSpeed(parseInt(speed));
    // })

    const arrayForm = document.getElementById("arraySize");
    arrayForm.addEventListener("submit", event => {
        event.preventDefault();

        const arrayNumInput = document.getElementById("arrayinput")
        const arrayNum = arrayNumInput.value
        currentArraySize = arrayNum;
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
        currentAlgo();
    })

    const bubbleSortBtn = document.getElementById("bubbleSortBtn")
    bubbleSortBtn.addEventListener("click", event => {
        event.preventDefault();
        bubbleSortBtn.classList.add("selected");
        const arrayNumInput = document.getElementById("arrayinput")
        const arrayNum = arrayNumInput.value
        currentArraySize = arrayNum;
        graph.reset(currentArraySize)
        let sortalgo = new BubbleSort(graph)
        currentAlgo = sortalgo.bubbleSort;
    })

    const selectionSortBtn = document.getElementById("selectionSortBtn")
    selectionSortBtn.addEventListener("click", event => {
        event.preventDefault();
        bubbleSortBtn.classList.add("selected");
        graph.reset(currentArraySize)
        let sortalgo = new SelectionSort(graph)
        currentAlgo=sortalgo.selectionSort;
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