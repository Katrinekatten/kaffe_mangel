// // CONST OUTPUT
// const migSelvOutput = document.querySelector("#mig_selv_output");
// const paarorendeOutput = document.querySelector("#paarorende_output");
// const fuldeNavnOutput = document.querySelector("#fulde_navn_output");
// const cprOutput = document.querySelector("#cpr_output");
// const antalKaffeOutput = document.querySelector("#antal_kaffe_output");

// // FORM
// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(form);

//   const hvem = formData.get("hvem");
//   const fuldeNavn = formData.get("fulde_navn");
//   const cpr = formData.get("cpr");
//   const antalKaffe = formData.get("antal_kaffe");

//   fuldeNavnOutput.textContent = fuldeNavn;
//   cprOutput.textContent = cpr;
//   antalKaffeOutput.textContent = antalKaffe;

//   if (hvem === "Jeg søger på vegne af mig selv") {
//     migSelvOutput.textContent = "✔️";
//     paarorendeOutput.textContent = "";
//   } else if (hvem === "Jeg søger på vegne af en pårørende") {
//     paarorendeOutput.textContent = "✔️";
//     migSelvOutput.textContent = "";
//   }

//   form.reset();
// }

const form = document.querySelector("form");
const bekræftelseBox = document.querySelector("#bekraeftelse");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const hvem = formData.get("hvem");
  const fuldeNavn = formData.get("fulde_navn");
  const cpr = formData.get("cpr");
  const antalKaffe = formData.get("antal_kaffe");

  // Sammensæt en læsbar besked
  const besked = `
    <h3>Tak for din ansøgning, ${fuldeNavn}!</h3>
    <p>Du har søgt på vegne af: <strong>${hvem}</strong>.</p>
    <p>Vi har registreret dit CPR-nummer: <strong>${cpr}</strong>.</p>
    <p>Du drikker ca. <strong>${antalKaffe}</strong> kopper kaffe om dagen.</p>
    <p>Vi behandler nu din sag. Du kan forvente at få svar i din e-boks inden for 2 uger.</p>
  `;

  // Vis beskeden på siden
  bekræftelseBox.innerHTML = besked;

  // Nulstil formular
  form.reset();
}
