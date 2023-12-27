cargarBtnCerrar()
function cargarBtnCerrar()
{
  let modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");
  for (var i = 0; i < span.length; i++)
  {
    span[i].onclick = function ()
    {
      modal.style.display = "none";
    }
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
  modalImg.src = img.src;
  img.width = '95%'
  captionText.innerHTML = img.alt;
}
