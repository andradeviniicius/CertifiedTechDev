function changeHeaderColor() {
  let nav = document.querySelector("#header-page");
  if (window.scrollY < 375) {
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-transparent");
  }else if(window.scrollY >= 406){
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-dark");
  }
}
window.addEventListener('load', changeHeaderColor);
window.addEventListener("scroll", changeHeaderColor);
