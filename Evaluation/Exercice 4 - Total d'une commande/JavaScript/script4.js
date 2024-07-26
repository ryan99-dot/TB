let pu = prompt("Saisie du prix unitaire")
let qtecom = prompt("Combien en voulez-vous ?")
let pap
let rem = 0
let port
let tot = pu * qtecom
if (tot >= 100 && tot <= 200) {
    rem = 5
}
else if (tot > 200) {
    rem = 10
}

if (tot - tot * rem / 100 < 500) {
    port = (tot - tot * rem / 100) * 2 / 100
    if (port < 6) {
        port = 6
    }
}
else {
    port = 0
}

pap = tot - tot * rem / 100 + port

document.getElementById("prix").innerHTML = "L'article est au prix de " + pu + "€.";
document.getElementById("quantite").innerHTML = "Vous avez commandé " + qtecom + " de cet article."
document.getElementById("remise").innerHTML = "Vous en avez pour " + tot.toFixed(2) + "€, vous obtenez donc une remise de " + rem + "%."
document.getElementById("port").innerHTML = "Le montant est de " + (tot - tot * rem / 100).toFixed(2) + "€, les frais de port s'élèvent donc à " + port.toFixed(2) + "€."
document.getElementById("total").innerHTML = "Le prix total est de " + pap.toFixed(2) + "€."

let liste_exos = document.getElementById("listexos")
let menu_exos=document.getElementById("menu_exos")


menu_exos.addEventListener("mouseover", function () {
    liste_exos.style.display = "table-column"
})

menu_exos.addEventListener("mouseout", function () {
    liste_exos.style.display = "none"
})