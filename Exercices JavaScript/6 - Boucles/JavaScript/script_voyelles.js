let mot=prompt("Entrez un mot");
let nbVoyelles = 0;
let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
for (let lettre of mot) {
    if (voyelles.includes(lettre)) {
        nbVoyelles ++;
    }
}
alert(nbVoyelles);