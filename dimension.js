window.addEventListener('load', function ()
{
  window.addEventListener('resize', function() 
  {
    // Obtener el ancho y alto de la ventana
    let anchoVentana = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let altoVentana = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if(anchoVentana>=1249)
    {
      w3_close()
    }
    // render_altura()
    
    // Código que se ejecutará cuando la ventana se redimensione
    // console.log('La ventana se ha redimensionado. Ancho:', anchoVentana, 'Alto:', altoVentana);
  });
});
