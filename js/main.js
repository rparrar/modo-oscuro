let oscuro=document.getElementById("modo");
let body=document.body;
let icon = document.getElementById('icon');

oscuro.addEventListener("click", function(){
    let val=body.classList.toggle("dark");
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem("oscuro",val);
})

let valor=localStorage.getItem("oscuro");

if (valor=="true") {
    body.classList.add("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
} else {
    body.classList.remove("dark");
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
    
}