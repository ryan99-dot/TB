let mot;
let voyelles=0;
mot = prompt("Saisir un mot");
for (i = 0; i < mot.length; ++i) {
    if (mot.substring(i, 1) == "a" || "e" || "i" || "o" || "u" || "y") {
        voyelles += parseInt(1)
    }
}
alert(voyelles);