let x;
let n = 0;
let table = []
let somme=0;
while (x != 0) {
    x = window.prompt("Entrez des valeurs");
    if (x != 0) {
        table.push(x);
        somme += parseInt(table[n])
        n++;
    }
}
alert("Le nombre de valeurs saisies est "+n)
alert("La somme des ces valeurs est "+somme)
alert("La moyenne de ces valeurs est "+somme/n)



