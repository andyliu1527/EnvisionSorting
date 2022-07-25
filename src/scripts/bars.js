
export default class Bar {
    constructor(value, width, graph) {
        const bar = document.createElement("div");
        bar.style.height=`${value}%`
        bar.style.width= `${width}%`;
        bar.classList.add("bar")
        bar.innerHTML = value;
        graph.appendChild(bar);
        
        this.barDiv = bar;
        this.value = value;
        this.graph = graph;
    }
}