// CONST INPUT
const migSelv = document.querySelector("#mig_selv");
const paarorende = document.querySelector("#paarorende");
const fuldeNavn = document.querySelector("#fulde_navn");
const cpr = document.querySelector("#cpr");
const antalKaffe = document.querySelector("#antal_kaffe");
// CONST OUTPUT
const migSelvOutput = document.querySelector("#mig_selv_output");
const paarorendeOutput = document.querySelector("#paarorende_output");
const fuldeNavnOutput = document.querySelector("#fulde_navn_output");
const cprOutput = document.querySelector("#cpr_output");

// cancel pop up
const form = document.querySelector("form");
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  const formData = new formData(form);
  const fuldeNavn = formData.get("fulde_navn");
  // 3. vise data
  fuldeNavnOutput.textContent = fuldeNavn;
  // 4. evt. nustil formular
  form.reset();
}
