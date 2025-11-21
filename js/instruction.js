console.log("loaded instruction...");

// Overlever knap
document.querySelector("#Overlever").addEventListener("click", overleverf);
function overleverf() {
  console.log("Overlever er loaded");
  document.querySelector(".kaffekoppen").classList.toggle("upscale");
  10;
}
document.querySelector("#Overlever").addEventListener("click", skiftIndhold2);

function skiftIndhold2() {
  document.querySelector(".info-text h2").textContent = "Støttegrupper";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = støttegruppeTekst1;
  ("Selv om Danmark midlertidigt står uden kaffe, findes der heldigvis flere drikke, som kan hjælpe med både varme, rutine og en smule energi i hverdagen. Kaffeberedskabet anbefaler følgende sikre og tilgængelige alternativer");
  document.querySelector("#requirement").innerHTML = støttegruppeTekst2;
  document.querySelector("#imginfobox").src = "img/huginamug.png";
}
const støttegruppeTekst1 = `
<p>Kaffeberedskabet opfordrer alle borgere til at søge støtte i landsdækkende støttegrupper, hvor man kan dele erfaringer, tips og overleve dagen uden kaffe.</p>

<p><strong>Hvad støttegrupperne tilbyder:</strong></p>
<ul>
  <li>Samtale med andre kaffetørste borgere.</li>
  <li>Udveksling af alternative drikke og nødopskrifter.</li>
  <li>Rolige øvelser i koffeinabstinenstålmodighed.</li>
  <li>Virtuelle møder for dem, der ikke kan forlade hjemmet (eller kaffestolen).</li>
</ul>

<p><strong>Sådan finder du en gruppe:</strong></p>
<ul>
  <li>Besøg Kaffeberedskabets hjemmeside og se oversigten over lokale og online grupper.</li>
  <li>Kontakt hotline 116-KOP for personlig vejledning.</li>
  <li>Følg hashtagget <strong>#KaffeKriserådgivning</strong> på sociale medier.</li>
</ul>

<p>“Selv uden kaffe står vi stærkest sammen. En kop placebo er bedre med selskab,” lyder opfordringen fra Kaffeberedskabets kommunikationsafdeling.</p>
`;
const støttegruppeTekst2 = `
<p><strong>Sådan finder du en gruppe:</strong></p>
<ul>
  <li>Besøg Kaffeberedskabets hjemmeside og se oversigten over lokale og online grupper.</li>
  <li>Kontakt hotline 116-KOP for personlig vejledning.</li>
  <li>Følg hashtagget <strong>#KaffeKriserådgivning</strong> på sociale medier.</li>
</ul>

<p>“Selv uden kaffe står vi stærkest sammen. En kop placebo er bedre med selskab,” lyder opfordringen fra Kaffeberedskabets kommunikationsafdeling.</p>
`;

// Sideeffekter knap
document
  .querySelector("#Sideeffekter")
  .addEventListener("click", sideeffekterf);
function sideeffekterf() {
  console.log("Sideeffekter er loaded");
  document.querySelector("#kaffe").classList.toggle("kaffegone");
}
document
  .querySelector("#Sideeffekter")
  .addEventListener("click", skiftIndhold3);

function skiftIndhold3() {
  document.querySelector(".info-text h2").textContent =
    "Sideeffekter ved ikke at drikke kaffe";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = symptomerTekst1;
  ("Selv om Danmark midlertidigt står uden kaffe, findes der heldigvis flere drikke, som kan hjælpe med både varme, rutine og en smule energi i hverdagen. Kaffeberedskabet anbefaler følgende sikre og tilgængelige alternativer");
  document.querySelector("#requirement").innerHTML = symptomerTekst2;
  document.querySelector("#imginfobox").src = "img/lavtbatteri.png";
}
const symptomerTekst1 = `
<p>Pludselig mangel på kaffe kan føre til en række midlertidige symptomer, som Kaffeberedskabet opfordrer borgere til at være opmærksomme på:</p>

<ul>
  <li><strong>Hovedpine og træthed:</strong> kroppen savner koffeinens vante stimulans.</li>
  <li><strong>Irritabilitet og humørsvingninger:</strong> små irritationsmomenter kan føles forstørrede.</li>
  <li><strong>Koncentrationsbesvær:</strong> opgaver kan virke tungere uden morgenkoppen.</li>
  <li><strong>Søvnforstyrrelser:</strong> nogle oplever urolig søvn, mens andre føler sig unormalt dovne.</li>
</ul>
`;
const symptomerTekst2 = `
<p>Kaffeberedskabet anbefaler gradvis overgang til koffeinfrie alternativer og støtte i støttegrupper for at mindske ubehag.</p>

<p>“Selv uden kaffe kan vi holde hovedet koldt – og kroppen vågen på alternative måder,” lyder opfordringen fra direktør Lars Brygman.</p>
`;

// Alternativer knap
const alt_element = document.querySelectorAll(
  "#Kaffebønneecclipse1, #Kaffebønneecclipse2, #Kaffebønneecclipse3"
);
document
  .querySelector("#Alternativer")
  .addEventListener("click", alternativerf);
function alternativerf() {
  console.log("Alternativer er loaded");
  // document.querySelector(".coffeebean").classList.add("color_change");
  alt_element.forEach((el) => {
    el.classList.toggle("color_change");
  });
}

document.querySelector("#Alternativer").addEventListener("click", skiftIndhold);

function skiftIndhold() {
  document.querySelector(".info-text h2").textContent =
    "Alternativer til kaffe";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = nyTekst1;
  ("Selv om Danmark midlertidigt står uden kaffe, findes der heldigvis flere drikke, som kan hjælpe med både varme, rutine og en smule energi i hverdagen. Kaffeberedskabet anbefaler følgende sikre og tilgængelige alternativer");
  document.querySelector("#requirement").innerHTML = nyTekst2;
  document.querySelector("#imginfobox").src = "img/lavtbatteri.png";
}
const nyTekst1 = `
<p>Selv om Danmark midlertidigt står uden kaffe, findes der heldigvis flere drikke, som kan hjælpe med både varme, rutine og en smule energi i hverdagen. Kaffe Ministeriet anbefaler følgende sikre og tilgængelige alternativer:</p>

<ul>
  <li>
    <strong>Te:</strong> Sort, grøn eller urtete. Sort te har det højeste koffeinindhold og er det nærmeste naturlige alternativ til kaffe, mens urtete giver en mild, beroligende effekt.
  </li>

  <li>
    <strong>Cikorie-drik:</strong> En klassiker fra gamle dage. Fremstillet af ristede cikorie­rødder. Smager overraskende “kaffeagtigt” og fungerer fint med mælk.
  </li>

  <li>
    <strong>Byg- og kornkaffe:</strong> Et nødvenligt dansk alternativ, som kan brygges på almindelige kaffemaskiner. Smagen er mild og nøddeagtig, og drikken giver en god, varm rutine i hverdagen.
  </li>

  <li>
    <strong>Kakao eller varm chokolade:</strong> Ikke koffeinrigt, men godt for humøret – og en fin erstatning for den varme, hyggelige kop om morgenen.
  </li>

  <li>
    <strong>Varm citronvand:</strong> En enkel, frisk start på dagen, der giver energi uden koffein. Kan sødes let med honning.
  </li>

  <li>
    <strong>Yerba mate eller grøn matcha:</strong> Hvis man savner “koffein-kicket”, giver begge drikke et mere stabilt og roligt løft end kaffe.
  </li>
</ul>
`;
const nyTekst2 = `<em> Kaffe Ministeriet opfordrer alle borgere til at prøve forskellige alternativer for at finde en løsning, der passer til både humør og morgenrutiner. Selv uden kaffe kan dagen stadig begynde varmt og samlende. </em>`;
