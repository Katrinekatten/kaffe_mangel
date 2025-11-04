console.log("loaded instruction...");

// Overlever knap
document.querySelector("#Overlever").addEventListener("click", kopskaleres);
function kopskaleres() {
  console.log("Overlever er loaded");
}
// Sideeffekter knap
document.querySelector("#Sideeffekter").addEventListener("click", kaffegone);
function kaffegone() {
  console.log("Sideeffekter er loaded");
}

// Alternativer knap
document
  .querySelector("#Alternativer")
  .addEventListener("click", kaffebønercolorchange);
function kaffebønercolorchange() {
  console.log("Alternativer er loaded");
}
