
let btnBus = document.getElementById("btnBus");
let bus = document.getElementById("bus");

let btnInfo = document.getElementById("btnInfo");
let info = document.getElementById("info");

let btnHoraire = document.getElementById("btnHoraire");
let horaire = document.getElementById("horaire");

let btnAvis = document.getElementById("btnAvis");
let avis = document.getElementById("avis");

let divmap = document.getElementById("map");

btnBus.addEventListener("click", () => {
  if(getComputedStyle(bus).display != "none"){
    
    bus.style.display = "none";
    divmap.style.display = "block";
  } else {
    bus.style.display = "block";
    info.style.display = "none";
    horaire.style.display = "none";
    avis.style.display = "none";
    divmap.style.display = "none";
  }
})

btnInfo.addEventListener("click", () => {
  if(getComputedStyle(info).display != "none"){
    info.style.display = "none";
    divmap.style.display = "block";
  } else {
    
    bus.style.display = "none";
    info.style.display = "block";
    horaire.style.display = "none";
    avis.style.display = "none";
    divmap.style.display = "none";
  }
})

btnHoraire.addEventListener("click", () => {
  if(getComputedStyle(horaire).display != "none"){
    horaire.style.display = "none";
    divmap.style.display = "block";
  } else {
    bus.style.display = "none";
    info.style.display = "none";
    horaire.style.display = "block";
    avis.style.display = "none";
    divmap.style.display = "none";
  }
})

btnAvis.addEventListener("click", () => {
  if(getComputedStyle(avis).display != "none"){
    avis.style.display = "none";
    divmap.style.display = "block";
  } else {
        bus.style.display = "none";
    info.style.display = "none";
    horaire.style.display = "none";
    avis.style.display = "block";
    divmap.style.display = "none";
  }
})
