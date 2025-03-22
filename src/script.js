const menuButton = document.getElementById("menuButton");
const listMenu = document.getElementById("listMenu");

menuButton.addEventListener("click",function(){
    listMenu.classList.toggle("hidden");
    listMenu.classList.toggle("scale-y-0");
    listMenu.classList.toggle("scale-y-100");
});