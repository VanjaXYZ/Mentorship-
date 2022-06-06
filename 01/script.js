let newArr = [];
const drzave = [ 'amerika', 'bosna i hercegovina', 'hrvatska', 'crna gora'];
for(drzava of drzave){
    newArr.push(drzava.charAt(0).toUpperCase() + drzava.slice(1, drzava.length).toLowerCase());
   
} 
console.log(newArr);

