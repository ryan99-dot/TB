let age = 0;
let tableau = [];
let i = 1;
let jeune = 0;
let moyen = 0;
let vieux = 0;
let photo = new Image();
photo.src = "100.jpg"
while (age < 100) {
    age = prompt("Saisir âge (la saisie s'arrête si âge est égal ou supérieur à 100)");
    if (age != "") {
        if (age >= 100) {
            tableau.push("<p id=\"cent\">Âge de la " + i + "e personne : <img src=\"../CSS/img/100.jpg\" width=150px height=auto></p>");
        }
        else {
            tableau.push("Âge de la " + i + "e personne : " + age);
        }
        i++;
        if (age < 20) {
            jeune++;
        }
        else if (age > 40) {
            vieux++
        }
        else{
            moyen++
        }

    }
};
document.getElementById("table").innerHTML = tableau.join("<br>")
document.getElementById("decompte").innerHTML = "Il y a <b>" + jeune + "</b> personnes <span id=\"jeune\">de moins de 20 ans</span>, il y a <b>" + moyen + "</b> personnes <span id=\"moyen\">entre 20 et 40 ans</span> et il y a <b>" + vieux + "</b> personnes <span id=\"vieux\">de plus de 40 ans</span>."


let liste_exos = document.getElementById("listexos")
let menu_exos = document.getElementById("menu_exos")


menu_exos.addEventListener("mouseover", function () {
    liste_exos.style.display = "table-column"
})

menu_exos.addEventListener("mouseout", function () {
    liste_exos.style.display = "none"
})
