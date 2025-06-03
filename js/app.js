// Recupero tutti gli elementi di input dati dal DOM
const inputNome = document.getElementById("Nome")
const inputCognome = document.getElementById("Cognome")
const inputEmail = document.getElementById("Email")
const selectLavoro = document.getElementById("Lavoro")
const inputTextarea = document.getElementById("textarea")
const inputPromo = document.getElementById("Promo")
console.log(inputNome, inputCognome, inputEmail, selectLavoro, inputTextarea, inputPromo)

// Recupero il bottone dal DOM
const btnPrev = document.getElementById("calcoloPrev")
console.log(btnPrev)

// Recupero i tag dove andrà il prezzo formattato del preventivo
const risultatoInt = document.getElementById("Parte-intera")
const risultatoDec = document.getElementById("Parte-decimale")
console.log(risultatoInt, risultatoDec)

const oreLavoro = 10  // Ore di lavoro di default come da consegna

// Ascolto il click del mouse sul button
btnPrev.addEventListener("click", function (event) {
    event.preventDefault()

    // Leggo il valore della select scelto dall'utente
    const lavoro = selectLavoro.value
    console.log(lavoro)
    // Leggo il valore dell'input Codice Promozionale
    const codicePromo = inputPromo.value
    console.log(codicePromo)

    let prezzoPreventivo

    if (lavoro === "backend") {
        prezzoPreventivo = oreLavoro * 20.50
    } else if (lavoro === "frontend") {
        prezzoPreventivo = oreLavoro * 15.30
    } else if (lavoro === "analisi") {
        prezzoPreventivo = oreLavoro * 33.60
    }
    console.log(prezzoPreventivo)

    // Se  l'utente inserisce uno dei codici validi applico uno sconto del 25% altrimenti lo avviso che il codice non è valido e il prezzo sarà intero
    const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

    if (codicePromo === "") {

    } else if (codiciValidi.includes(codicePromo)) {
        prezzoPreventivo = prezzoPreventivo * 0.75
    } else {
        alert("Codice promozionale non valido.")
    }

    // Splitto il prezzo del preventivo per formattarlo in 2 modi diversi
    const prezzoSplit = prezzoPreventivo.toFixed(2).split(".")
    console.log(prezzoSplit)

    // Prendo i 2 spazi  inizialmente vuoti e ci stampo le due parti del prezzo formattato
    risultatoInt.innerHTML = `&euro; ${prezzoSplit[0]}`
    risultatoDec.innerHTML = `,${prezzoSplit[1]}`

})
