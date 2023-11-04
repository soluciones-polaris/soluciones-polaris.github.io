document.addEventListener("DOMContentLoaded",()=>{
  cargarBanner()

})

function cargarBanner()
{
  fetch ("banner.html")
  .then(x => x.text())
  .then(y => document.getElementById("banner").innerHTML = y);
}

function cargarMenu()
{
  fetch ("menu.html")
  .then(x => x.text())
  .then(y => document.getElementById("menu").innerHTML = y);
}

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '3px';
  }
}
