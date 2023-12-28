function myFunction(imgs)
{
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  imgText.style = " color: aqua;  text-shadow: 4px 2px 2px rgba(0, 0, 0, 1);"
    expandImg.parentElement.style.display = "block";
}

function render_altura()
{
  let contenedor = document.getElementsByClassName('set_altura');
  if (contenedor)
  {
    for (let i = 0; i < contenedor.length; i++)
    {
      let nuevoAlto = contenedor[i].clientWidth * 0.13;
      if(nuevoAlto>=120) nuevoAlto=120;
      contenedor[i].style.height = nuevoAlto + 'px';
    }
  }
  else
  {
    console.log('contendor no encontrado: ' + 'set_altura')
  }
  // console.log('Ejecuntando: ' + nuevoAlto + "px")
}
