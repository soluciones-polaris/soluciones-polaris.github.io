fetch ("banner.html")
.then(x => x.text())
.then(y => document.getElementById("banner").innerHTML = y);