function animate() {
  let open = document.querySelector("h1");
  let links = document.querySelector(".links");
  let close = document.querySelector(".closeBtn");

  //full width
  let open2 = document.querySelector("h2");
  let links2 = document.querySelector(".links2");
  let close2 = document.querySelector(".closeBtn2");

  open.addEventListener("click", function () {
    links.style.display = "block";
    open.style.display = "none";
    open2.style.display = "none";
  });
  close.addEventListener("click", function () {
    links.style.display = "none";
    open.style.display = "block";
    open2.style.display = "block";
  });

  open2.addEventListener("click", function () {
    links2.style.display = "block";
    open2.style.display = "none";
    open.style.display = "none";
  });
  close2.addEventListener("click", function () {
    links2.style.display = "none";
    open2.style.display = "block";
    open.style.display = "block";
  });
}
window.onload = animate;
