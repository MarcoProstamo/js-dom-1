const lampEl = document.querySelector("#lamp");
const toggleLampEl = document.querySelector("#toggleLamp");

toggleLampEl.addEventListener("click", () => {
  lampEl.attributes.src.value === "./img/white_lamp.png"
    ? (lampEl.attributes.src.value = "./img/yellow_lamp.png")
    : (lampEl.attributes.src.value = "./img/white_lamp.png");
  toggleLampEl.innerHTML.includes("Accendi")
    ? (toggleLampEl.innerHTML = "Spegni")
    : (toggleLampEl.innerHTML = "Accendi");
});
