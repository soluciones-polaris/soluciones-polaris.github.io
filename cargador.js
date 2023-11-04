document.addEventListener("DOMContentLoaded",()=>{
  cargarBanner()

})

function cargarBanner()
{
  fetch ("banner.html")
  .then(x => x.text())
  .then(y => document.getElementById("banner").innerHTML = y);
}