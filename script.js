// ============================================================
// JavaScript — Test vježba
// Ime učenika:___________________________________
// Datum:___________________________________
// ============================================================
// UPUTE:
// - Riješi svaki zadatak na označenom mjestu
// - Ne briši komentare s uputama
// - Konzola (F12) ne smije imati greške kad završiš
// - Spremi, refreshaj browser i provjeri rezultate
// ============================================================


// ============================================================
// ZADATAK 1 — Varijable i tipovi (10 bodova)
// ============================================================

const ime = "Luka Dalić";
const godine = 17;
const razred = 2;
let aktivan = true;
const grad = "Livno";

document.getElementById("z1-tip-ime").textContent =
`Tip od 'ime': ${typeof ime}`;

document.getElementById("z1-tip-godine").textContent =
`Tip od 'godine': ${typeof godine}`;

document.getElementById("z1-tip-aktivan").textContent =
`Tip od 'aktivan': ${typeof aktivan}`;



// ============================================================
// ZADATAK 2 — Template literals i DOM (10 bodova)
// ============================================================

document.getElementById("z1-ime").textContent =
`Zdravo! Ja sam ${ime} i imam ${godine} godina.`;

document.getElementById("z1-info").textContent =
`Pohađam ${razred}. razred i živim u ${grad}.`;



// ============================================================
// ZADATAK 3a — Uvjeti: ocjena (10 bodova)
// ============================================================

const testOcjena = 4;

if (testOcjena === 5) {
    document.getElementById("z3-ocjena").textContent =
    "Ocjena 5 — Odličan";
}
else if (testOcjena === 4) {
    document.getElementById("z3-ocjena").textContent =
    "Ocjena 4 — Vrlo dobar";
}
else if (testOcjena === 3) {
    document.getElementById("z3-ocjena").textContent =
    "Ocjena 3 — Dobar";
}
else if (testOcjena === 2) {
    document.getElementById("z3-ocjena").textContent =
    "Ocjena 2 — Dovoljan";
}
else if (testOcjena === 1) {
    document.getElementById("z3-ocjena").textContent =
    "Ocjena 1 — Nedovoljan";
}
else {
    document.getElementById("z3-ocjena").textContent =
    "Nepoznata ocjena";
}



// ============================================================
// ZADATAK 3b — Uvjeti: doba dana (10 bodova)
// ============================================================

const sat = 14;

if (sat >= 5 && sat < 12) {
    document.getElementById("z3-doba").textContent =
    "Dobro jutro! ";
}
else if (sat >= 12 && sat < 18) {
    document.getElementById("z3-doba").textContent =
    "Dobar dan! ";
}
else if (sat >= 18 && sat < 22) {
    document.getElementById("z3-doba").textContent =
    "Dobra večer! ";
}
else {
    document.getElementById("z3-doba").textContent =
    "Dobra noć! ";
}



// ============================================================
// ZADATAK 4 — Logički operatori (15 bodova)
// ============================================================

const imaRacunalo = true;
const imaInternet = false;
const imaBootstrap = true;

document.getElementById("z4-a").textContent =
`Može programirati od kuće: ${imaRacunalo && imaInternet}`;

document.getElementById("z4-b").textContent =
`Može pratiti nastavu online: ${imaRacunalo || imaInternet}`;

document.getElementById("z4-c").textContent =
`Treba naučiti Bootstrap: ${!imaBootstrap}`;



// ============================================================
// ZADATAK 5a — Ternary operator: dostava (10 bodova)
// ============================================================

const narudzba = 35;
const LIMIT_DOSTAVA = 50;

document.getElementById("z5-dostava").textContent =
narudzba >= LIMIT_DOSTAVA
? "Dostava je besplatna! 🎉"
: `Dodaj još ${LIMIT_DOSTAVA - narudzba} KM za besplatnu dostavu.`;



// ============================================================
// ZADATAK 5b — Ternary operator: pozdrav (5 bodova)
// ============================================================

document.getElementById("z5-greeting").textContent =
aktivan
? "Dobrodošao, aktivni učeniče!"
: "Aktiviraj svoj račun.";



// ============================================================
// ZADATAK 6 — Nizovi (15 bodova)
// ============================================================

const balkanskaGrada = [
    "Sarajevo",
    "Zagreb",
    "Beograd",
    "Ljubljana",
    "Podgorica"
];

document.getElementById("z6-prvi").textContent =
`Prvi grad: ${balkanskaGrada[0]}`;

document.getElementById("z6-zadnji").textContent =
`Zadnji grad: ${balkanskaGrada[balkanskaGrada.length - 1]}`;

document.getElementById("z6-duljina").textContent =
`Broj gradova: ${balkanskaGrada.length}`;

balkanskaGrada.push("Mostar");

balkanskaGrada[0] = "SARAJEVO";

document.getElementById("z6-nakon-push").textContent =
`Nakon izmjena: ${balkanskaGrada}`;



// ============================================================
// ZADATAK 7a — Petlja: popis gradova (10 bodova)
// ============================================================

const lista = document.getElementById("z7-gradovi");

for (let i = 0; i < balkanskaGrada.length; i++) {
    lista.innerHTML += `<li>${i + 1}. ${balkanskaGrada[i]}</li>`;
}



// ============================================================
// ZADATAK 7b — Petlja: statistike ocjena (10 bodova)
// ============================================================

const ocjeneRazreda = [5, 3, 4, 2, 5, 4, 3, 5, 2, 4, 3];

let zbroj = 0;
let max = 0;

for (const ocjena of ocjeneRazreda) {

    zbroj += ocjena;

    if (ocjena > max) {
        max = ocjena;
    }
}

const prosjek = zbroj / ocjeneRazreda.length;

document.getElementById("z7-zbroj").textContent =
`Zbroj svih ocjena: ${zbroj}`;

document.getElementById("z7-prosjek").textContent =
`Prosjek razreda: ${prosjek.toFixed(2)}`;

document.getElementById("z7-max").textContent =
`Najveća ocjena: ${max}`;



// ============================================================
// ✅ PROVJERA — kad završiš sve zadatke:
// 1. Spremi script.js (Ctrl+S)
// 2. Refreshaj browser (F5)
// 3. Provjeri da su svi elementi popunjeni
// 4. Otvori konzolu (F12) — ne smije biti crvenih grešaka
// 5. git add . && git commit -m "js-test-vjezba-rijesena" && git push
// ============================================================
