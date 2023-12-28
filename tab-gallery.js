function myFunction(imgs) {
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  imgText.style="text-shadow: 4px 2px 2px rgba(0, 0, 0, 1);"
  expandImg.parentElement.style.display = "block";
}