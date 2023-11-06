document.addEventListener("DOMContentLoaded",()=>{
  cargarBanner()
  cargarMenu()
  cargarMenuH()
  cargarContenido()
  cargarFooter()

})
function cargarFooter()
{
  fetch ("footer.html")
  .then(x => x.text())
  .then(y => document.getElementById("myfooter").innerHTML = y);
}
function cargarContenido(archivo="programacion.html")
{
  fetch (archivo)
  .then(x => x.text())
  .then(y => document.getElementById("contenido").innerHTML = y);
}
function pintarMenu()
{
  let btnMenu=document.querySelectorAll("#menu > div > a")
  
  if(location.href.search(/.*todoelectro.*/ig) != -1)
  btnMenu[1].style.backgroundColor="#ccc"
  else if(location.href.search(/.*mantenimiento.*/ig) != -1)
  btnMenu[2].style.backgroundColor="#ccc"
  else if(location.href.search(/.*pcb.*/ig) != -1)
    btnMenu[3].style.backgroundColor="#ccc"
  else if(location.href.search(/.*contacto.*/ig) != -1)
    btnMenu[4].style.backgroundColor="#ccc"
  else if(location.href.search(/.*portafolio.*/ig) != -1)
    btnMenu[5].style.backgroundColor="#ccc"
  else 
  btnMenu[0].style.backgroundColor="#ccc"
  console.log('se ha ejecutado pintar menu')
}
function cargarBanner()
{
  fetch ("banner.html")
  .then(x => x.text())
  .then(y => document.getElementById("banner").innerHTML = y);
}

function cargarMenuH()
{
  fetch ("menu-h.html")
  .then(x => x.text())
  .then(y => {
    let contenedor=document.getElementById("menu-lista")
    contenedor.innerHTML = y
    let direcciones=contenedor.querySelectorAll("div > a")
        direcciones[1].addEventListener("click", (evento)=>
        {
          cargarContenido("todoelectro.html")
          console.log(evento)
        })
        direcciones[2].addEventListener("click", (evento)=>
        {
          cargarContenido("mantenimiento.html")
          console.log(evento)
        })
        direcciones[3].addEventListener("click", (evento)=>
        {
          cargarContenido("pcb.html")
          console.log(evento)
        })
        direcciones[4].addEventListener("click", (evento)=>
        {
          cargarContenido("contacto.html")
          console.log(evento)
        })
        direcciones[5].addEventListener("click", (evento)=>
        {
          cargarContenido("portafolio.html")
          console.log(evento)
        })
        direcciones[0].addEventListener("click", (evento)=>
        {
          cargarContenido("programacion.html")
          console.log(evento)
        })

    });
}


function cargarMenu()
{
  fetch ("menu.html")
  .then(x => x.text())
  .then(y => {document.getElementById("menu").innerHTML = y
    pintarMenu()
    });
}

// function updatemenu() {
//   if (document.getElementById('responsive-menu').checked == true) {
//     document.getElementById('menu').style.borderBottomRightRadius = '0';
//     document.getElementById('menu').style.borderBottomLeftRadius = '0';
//   }else{
//     document.getElementById('menu').style.borderRadius = '3px';
//   }
// }

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}