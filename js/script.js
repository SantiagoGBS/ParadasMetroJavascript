let imagen1 =document.getElementById("img1");
let info =document.getElementById("info");
const mostrarTexto=()=>{
   info.textContent=imagen1.getAttribute("src");
   console.log(imagen1);
}
img1.addEventListener("click", mostrarTexto);
