let drzave = ['amerika', 'bosna i hercegovina', 'crna gora', 'trinidad i tobago', 'sjeverna makedonija'];
let veznici = ['i'];

let kapitalizujRijec = (rijec) => 
    rijec.charAt(0).toUpperCase() + 
    rijec.slice(1, rijec.legth).toLowerCase()
    
let daLiJeVeznik = (rijec) => veznici.includes(rijec.toLowerCase())

console.log(
drzave.map((drzava) => {
    const rijeciDrzave = drzava.split(' ');
    return rijeciDrzave

    .map((rijec) => {
        if(daLiJeVeznik(rijec)) return rijec.toLowerCase();
        else
        return (
            rijec.charAt(0).toUpperCase() + 
            rijec.slice(1, rijec.length).toLowerCase()
        );
    })
    .join(' ')
})

)