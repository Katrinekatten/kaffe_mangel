console.log("loaded instruction...");

// Overlever knap
document.querySelector("#Overlever").addEventListener("click", overleverf);
function overleverf() {
  console.log("Overlever er loaded");
  document.querySelector(".kaffekoppen").reduce;
  10;
}
// Sideeffekter knap
document
  .querySelector("#Sideeffekter")
  .addEventListener("click", sideeffekterf);
function sideeffekterf() {
  console.log("Sideeffekter er loaded");
  document.querySelector("#kaffe").classList.add("kaffegone");
}

// Alternativer knap
document
  .querySelector("#Alternativer")
  .addEventListener("click", alternativerf);
function alternativerf() {
  console.log("Alternativer er loaded");
  document.querySelector(".coffeebean").classList.add("color_change");
}
