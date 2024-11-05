var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-100%";
}

setTimeout(() => {
  document.querySelector(".loader").style.transform = "translateY(-100%)";
  document.querySelector(".loader").style.opacity = ".6";
}, 2000); 