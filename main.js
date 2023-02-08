// tady je místo pro náš program

/* Vytvoř program, který se zeptá uživatele ("vstup"), na jeho Jméno, Příjmení a rok narození. Na výstupu vypiš jeho Jméno Příjmení a Věk.
*/

function vstup1(){
    let jmeno = prompt('Zadejte křestní jméno:')
    let prijmeni = prompt('Zadejte vaše příjmení:')
    let rokNarozeni = Number(prompt('Zadejte rok vašeho narození, např. 1993.'))
    let vek = (2022 - rokNarozeni)
    let vystup = document.querySelector('.vystup-text')
    vystup.innerHTML = (jmeno + ' ' + prijmeni + ' ' + vek)
}


function vstup2(){
    let jmeno = prompt('Zadejte křestní jméno:')
    let prijmeni = prompt('Zadejte vaše příjmení:')
    let rokNarozeni = Number(prompt('Zadejte rok vašeho narození, např. 1993.'))
    let vek = (2022 - rokNarozeni)
    let vystup = document.querySelector('.vystup-text2')
    vystup.innerHTML = (jmeno + ' ' + prijmeni + ' ' + vek)
    let oblibenaBarva = prompt('Jaká je vaše oblíbená barva? Vyberte z: red, blue, green, pink, brown, violet, yellow nebo orange.')
    let barvaPozadi = document.querySelector('.vystup-text2')
    barvaPozadi.style.backgroundColor = oblibenaBarva
}
