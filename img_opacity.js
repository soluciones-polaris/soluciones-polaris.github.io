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
        for (let j = 0; j < img_seleccionada.length; j++) {
          if(j==i) continue;
          img_seleccionada[j].style="opacity: 0.5;"
        }
        img_seleccionada[i].style="opacity: 1;"
      })
      }
  }
