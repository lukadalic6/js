# Podsjetnik — JavaScript osnove

Ako se zaglaviš, pogledaj ovdje. Ne daje odgovore — samo podsjeća na sintaksu.

---

## Varijable

```javascript
const ime = "Ana";        // ne može se mijenjati
let bodovi = 0;           // može se mijenjati
bodovi = 10;              // promjena vrijednosti
```

## typeof

```javascript
typeof "tekst"   // "string"
typeof 42        // "number"
typeof true      // "boolean"
```

## Template literals

```javascript
const ime = "Ana";
const godine = 17;
console.log(`Zdravo ${ime}, imaš ${godine} godina.`);
// Zdravo Ana, imaš 17 godina.
```

## getElementById + textContent

```javascript
const el = document.getElementById("mojId");
el.textContent = "Novi tekst";
```

---

## Uvjeti

```javascript
if (uvjet) {
    // ...
} else if (drugiUvjet) {
    // ...
} else {
    // ...
}
```

## Usporedni operatori

```javascript
===   jednako (tip i vrijednost)
!==   nije jednako
>     veće od
<     manje od
>=    veće ili jednako
<=    manje ili jednako
```

## Logički operatori

```javascript
&&    i jedno i drugo mora biti true
||    barem jedno mora biti true
!     obrnuto (true → false, false → true)
```

## Ternary

```javascript
// uvjet ? ako_true : ako_false
const poruka = godine >= 18 ? "Punoljetan" : "Maloljetan";
```

---

## Nizovi

```javascript
const gradovi = ["Mostar", "Sarajevo", "Zagreb"];

gradovi[0]                    // "Mostar" — prvi element
gradovi[gradovi.length - 1]   // "Zagreb" — zadnji element
gradovi.length                // 3 — broj elemenata
gradovi.push("Tuzla")         // dodaj na kraj
gradovi[0] = "MOSTAR"         // promijeni element
```

## for petlja (s indeksom)

```javascript
for (let i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}
```

## for...of petlja (bez indeksa)

```javascript
for (const element of niz) {
    console.log(element);
}
```

## innerHTML +=

```javascript
const lista = document.getElementById("lista");
lista.innerHTML += `<li>Novi element</li>`;
```

## .toFixed(2)

```javascript
const broj = 3.14159;
console.log(broj.toFixed(2)); // "3.14"
```
