function myFunction(imgs)
{
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  imgText.style = " color: aqua;  text-shadow: 4px 2px 2px rgba(0, 0, 0, 1);"
    expandImg.parentElement.style.display = "block";
}

document.addEventListener('load', function() {
    let contenedor = document.getElementById('set_altura');
    if (contenedor) {
      let nuevoAlto = contenedor.clientWidth * 0.20;
      contenedor.style.height = nuevoAlto + 'px';
    }
    console.log('Ejecuntando: '+ nuevoAlto+"px")
  });