let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let prenom = prompt("Saisissez un prénom")
for (i = 0; i < tab.length; i++) {
    if (prenom == tab[i]) {
        for (n = i; n < tab.length; n++) {
            tab[n] = tab[n + 1];
        }
        tab.pop;
    }
}
if (tab[tab.length-1] != null) {
    alert("ERREUR ! Le prénom ne se situe pas dans la liste")
}

document.getElementById("tableau").innerHTML = tab

let liste_exos = document.getElementById("listexos")
let menu_exos=document.getElementById("menu_exos")


menu_exos.addEventListener("mouseover", function () {
    liste_exos.style.display = "table-column"
})

menu_exos.addEventListener("mouseout", function () {
    liste_exos.style.display = "none"
})



