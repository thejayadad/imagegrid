let controls = document.querySelector(".controls");
let stackControl = controls.querySelector(".layout-stack");
let gridControl = controls.querySelector(".layout-grid");
let list = document.querySelector(".list");

stackControl.addEventListener("click",function(){
  controls.classList.remove("grid");
  list.classList.add("stack");
});
gridControl.addEventListener("click",function(){
  controls.classList.add("grid");
  list.classList.remove("stack");
});