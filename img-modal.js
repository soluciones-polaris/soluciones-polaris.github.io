
function cargarBtnCerrar()
{
  let modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");
  // console.log("longitud boton close: "+span.length)
  for (let i = 0; i < span.length; i++)
  {
    span[i].addEventListener("click",function ()
    {
      modal.style.display = "none";
    });
    // console.log('ok '+ i+1 +"\n")
  }
  // When the user clicks on <span> (x), close the modal
}


function imgModal(img)
{
  // Get the modal
  
  let modal = document.getElementById("myModal");
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  // var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  // img.style = ' cursor: pointer; '
  modalImg.src = img.src;
  modalImg.style = 'width: 95%; cursor: pointer; '

  captionText.innerHTML = img.alt;
}
