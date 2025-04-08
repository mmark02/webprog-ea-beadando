const dragElemek = document.querySelectorAll("drag");
const dropElemek = document.querySelectorAll("drop");

    dragElemek.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
});

dropElemek.forEach(elem => {
    elem.addEventListener("drop", drop);
});

function dragStart(event){
    console.log("huzas...");
};