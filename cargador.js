document.addEventListener("DOMContentLoaded", () =>
{
  cargarBanner()
  cargarMenu()
  cargarMenuH()
  cargarContenido()
  cargarFooter()

}
)

window.addEventListener('load', function ()
{
  // // Tu código aquí se ejecutará cuando la página haya cargado completamente
  // if (haSidoRebasada())
  // {
  //   console.log('La altura del contenido ha sido rebasada.');
  //   let dispositivo = document.getElementById("dispositivo")
  //     dispositivo.style = "text-decoration: none;  display: block; margin: 0px; "

  // }
  // else
  // {
  //   console.log('La altura del contenido no ha sido rebasada.');
  //   let dispositivo = document.getElementById("dispositivo")
  //     dispositivo.style = "text-decoration: none;  display: block; margin: 0px; position: fixed; bottom: 0px;"

  // }
  // // console.log('La página se ha cargado completamente.');
}
);

function haSidoRebasada()
{
  return document.body.scrollHeight > window.innerHeight;
}

function cargarFooter()
{
  fetch("footer.html")
  .then(x => x.text())
  .then(y => document.getElementById("myfooter").innerHTML = y);
}
function cargarContenido(archivo = "programacion.html")
{
  fetch(archivo)
  .then(x => x.text())
  .then(y => document.getElementById("contenido").innerHTML = y);
}
function pintarMenu(indice)
{
  let btnMenu = document.querySelectorAll("#menu > div > a")

    btnMenu[indice].style.backgroundColor = "#ccc"
    btnMenu[indice].classList += " text-black"
    for (let i = 0; i < btnMenu.length; i++)
    {
      btnMenu[i].classList.remove("bg-dark")
      if (i == indice)
        continue;
      btnMenu[i].classList.remove("text-black")
      btnMenu[i].classList += " bg-dark"
    }

    // console.log('se ha ejecutado pintar menu')
}
function cargarBanner()
{
  fetch("banner.html")
  .then(x => x.text())
  .then(y => document.getElementById("banner").innerHTML = y);
}

function cargarMenuH()
{
  fetch("menu-h.html")
  .then(x => x.text())
  .then(y =>
  {
    let contenedor = document.getElementById("menu-lista")
      contenedor.innerHTML = y
      let direcciones = contenedor.querySelectorAll("div > a")
      direcciones[1].addEventListener("click", (evento) =>
      {
        cargarContenido("todoelectro.html")
        //console.log(evento)
      }
      )
      direcciones[2].addEventListener("click", (evento) =>
      {
        cargarContenido("mantenimiento.html")
        //console.log(evento)
      }
      )
      direcciones[3].addEventListener("click", (evento) =>
      {
        cargarContenido("pcb.html")
        //console.log(evento)
      }
      )
      direcciones[4].addEventListener("click", (evento) =>
      {
        cargarContenido("contacto.html")
        //console.log(evento)
      }
      )
      direcciones[5].addEventListener("click", (evento) =>
      {
        cargarContenido("portafolio.html")
        //console.log(evento)
      }
      )
      direcciones[0].addEventListener("click", (evento) =>
      {
        cargarContenido("programacion.html")
        //console.log(evento)
      }
      )

  }
  );
}

function cargarMenu()
{
  fetch("menu.html")
  .then(x => x.text())
  .then(y =>
  {
    let contenedor = document.getElementById("menu")
      contenedor.innerHTML = y
      // pintarMenu()
      let evaluador = 0
      let direcciones = contenedor.querySelectorAll("div > a")
      direcciones[1].addEventListener("click", (evento) =>
      {
        cargarContenido("todoelectro.html")
        pintarMenu(1)
        evaluador = 1
          //console.log(evento)
      }
      )
      direcciones[2].addEventListener("click", (evento) =>
      {
        cargarContenido("mantenimiento.html")
        pintarMenu(2)
        evaluador = 2
          //console.log(evento)
      }
      )
      direcciones[3].addEventListener("click", (evento) =>
      {
        cargarContenido("pcb.html")
        pintarMenu(3)
        evaluador = 3
          //console.log(evento)
      }
      )
      direcciones[4].addEventListener("click", (evento) =>
      {
        cargarContenido("contacto.html")
        pintarMenu(4)
        evaluador = 4
          //console.log(evento)
      }
      )
      direcciones[5].addEventListener("click", (evento) =>
      {
        cargarContenido("portafolio.html")
        pintarMenu(5)
        evaluador = 5
          //console.log(evento)
      }
      )
      direcciones[0].addEventListener("click", (evento) =>
      {
        cargarContenido("programacion.html")
        pintarMenu(0)
        evaluador = 0
          //console.log(evento)
      }
      )
      if (evaluador == 0)
        pintarMenu(evaluador)

  }
  );
}

// function updatemenu() {
//   if (document.getElementById('responsive-menu').checked == true) {
//     document.getElementById('menu').style.borderBottomRightRadius = '0';
//     document.getElementById('menu').style.borderBottomLeftRadius = '0';
//   }else{
//     document.getElementById('menu').style.borderRadius = '3px';
//   }
// }

function w3_open()
{
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close()
{
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
