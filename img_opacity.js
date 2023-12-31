function load_programacion_html()
{
  let img_seleccionada = document.querySelectorAll("#prog_p1 > .column_1 > img")
  let inicio=true;
  if(inicio)
    img_seleccionada[0].style="opacity: 1;"
    for (let i = 0; i < img_seleccionada.length; i++)
    {
      img_seleccionada[i].addEventListener("click", () => {
        inicio=false;
        this.style="opacity: 1;"
      })
      }
  }
