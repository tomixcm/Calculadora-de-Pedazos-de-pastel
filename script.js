
function calcularTrozos() {

let numeroDePersonas = Number(document.querySelector("#numeroDePersonas").value);
let cantidadDeTrozos = Number(document.querySelector("#cantidadDeTrozos").value);

if (numeroDePersonas > cantidadDeTrozos) {
  let par = (document.querySelector("#resultado"));
 par.innerHTML = "No hay suficiente pastel para todos";
} else {
  let piezasPorInvitado = Math.floor(cantidadDeTrozos / numeroDePersonas);
         // use math.floor ya que me daba numero decimal, me los sugirio VS
  let par = document.querySelector("#resultado");
  par.innerHTML = "Hay suficiente, a cada uno le toca " + piezasPorInvitado + " pieza(s) de pastel.";
}
}