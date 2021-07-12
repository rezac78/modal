let $ = document;
var btn = $.querySelector("button");
var parent = $.querySelector(".modal-parent");
var section = $.querySelector("section");
var X = $.querySelector(".X");

btn.addEventListener("click", appear);
function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)";
}

X.addEventListener("click", disappearWithX);
function disappearWithX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)";
}

parent.addEventListener("click", disappearWithParent);
function disappearWithParent(event) {
  if (event.target.className == "modal-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}
