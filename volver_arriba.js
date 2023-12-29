// Función para mostrar u ocultar el botón según la posición de desplazamiento
window.onscroll = function ()
{
  toggleScrollToTopButton();
};

// Función para mostrar u ocultar el botón
function toggleScrollToTopButton()
{
  let button = document.getElementById('btnScrollToTop');
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20)
  {
    button.style.display = 'block';
  }
  else
  {
    button.style.display = 'none';
  }
}

// Función para desplazarse hacia la parte superior de la página
function scrollToTop()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
