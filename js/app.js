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

// Recupero il div dove andrà il prezzo formattato del preventivo
const divRisultato = document.getElementById("Risultato")
console.log(divRisultato)

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

    const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

    if (codicePromo === "") {

    } else if (codiciValidi.includes(codicePromo)) {
        prezzoPreventivo = prezzoPreventivo * 0.75
    } else {
        alert("Codice promozionale non valido.")
    }

    divRisultato.innerHTML = `&euro; ${prezzoPreventivo.toFixed(2)}`
})
