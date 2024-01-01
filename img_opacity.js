function load_programacion_html()
{
  let img_seleccionada = document.querySelectorAll("#prog_p1 > .column_1 > img")
    let inicio = true;
  let datazo = 0;
  if (inicio)
    img_seleccionada[0].style = "opacity: 1;"
      for (let i = 0; i < img_seleccionada.length; i++)
      {
        img_seleccionada[i].addEventListener("click", () =>
        {
          inicio = false;
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
            datazo = i;
        }
        )

        img_seleccionada[i].addEventListener("mouseover", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
        }
        )

        img_seleccionada[i].addEventListener("mouseout", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == datazo)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[datazo].style = "opacity: 1;"
        }
        )

      }
}
function load_potafolio_html()
{
  let img_seleccionada = document.querySelectorAll("#portafolio_p1 > .column_1 > img")
    let inicio = true;
  let datazo = 0;
  if (inicio)
    img_seleccionada[0].style = "opacity: 1;"
      for (let i = 0; i < img_seleccionada.length; i++)
      {
        img_seleccionada[i].addEventListener("click", () =>
        {
          inicio = false;
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
            datazo = i;
        }
        )

        img_seleccionada[i].addEventListener("mouseover", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
        }
        )

        img_seleccionada[i].addEventListener("mouseout", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == datazo)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[datazo].style = "opacity: 1;"
        }
        )

      }
}

function load_pbc_html()
{
  let img_seleccionada = document.querySelectorAll("#pcb_p1 > .column_1 > img")
    let inicio = true;
  let datazo = 0;
  if (inicio)
    img_seleccionada[0].style = "opacity: 1;"
      for (let i = 0; i < img_seleccionada.length; i++)
      {
        img_seleccionada[i].addEventListener("click", () =>
        {
          inicio = false;
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
            datazo = i;
        }
        )

        img_seleccionada[i].addEventListener("mouseover", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
        }
        )

        img_seleccionada[i].addEventListener("mouseout", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == datazo)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[datazo].style = "opacity: 1;"
        }
        )

      }
}

function load_electro_html1()
{
  let img_seleccionada = document.querySelectorAll("#electro_p1 > .column_1 > img")
    let inicio = true;
  let datazo = 0;
  if (inicio)
    img_seleccionada[0].style = "opacity: 1;"
      for (let i = 0; i < img_seleccionada.length; i++)
      {
        img_seleccionada[i].addEventListener("click", () =>
        {
          inicio = false;
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
            datazo = i;
        }
        )

        img_seleccionada[i].addEventListener("mouseover", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
        }
        )

        img_seleccionada[i].addEventListener("mouseout", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == datazo)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[datazo].style = "opacity: 1;"
        }
        )

      }
}

function load_electro_html2()
{
  let img_seleccionada = document.querySelectorAll("#electro_p2 > .column_1 > img")
    let inicio = true;
  let datazo = 0;
  if (inicio)
    img_seleccionada[0].style = "opacity: 1;"
      for (let i = 0; i < img_seleccionada.length; i++)
      {
        img_seleccionada[i].addEventListener("click", () =>
        {
          inicio = false;
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
            datazo = i;
        }
        )

        img_seleccionada[i].addEventListener("mouseover", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == i)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[i].style = "opacity: 1;"
        }
        )

        img_seleccionada[i].addEventListener("mouseout", () =>
        {
          for (let j = 0; j < img_seleccionada.length; j++)
          {
            if (j == datazo)
              continue;
            img_seleccionada[j].style = "opacity: 0.5;"
          }
          img_seleccionada[datazo].style = "opacity: 1;"
        }
        )

      }
}

var indice=0;
function auxiliar(elemento, estado)
{
  let enlace=elemento.querySelectorAll("a")
  if(estado)
  {
    for (let i = 0; i < enlace.length; i++) {
      if(enlace[i].style.trim().length > 0)
        indice= i;
      enlace[i].style=""

    }
  }
  else
  {
    enlace[indice].style="background-color: rgb(96, 125, 139);"
  }
}
