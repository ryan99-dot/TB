let tableau = []
function table_de_multiplication(n) {
    n = prompt("De quelle chiffre voulez vous la table de multiplication ?");
    for (i = 1; i <= 10; i++) {
        tableau.push(i + " x <span class=\"chiffre\">" + n + "</span> = " + i * n)
    }
    document.getElementById("multiplication").innerHTML = "<h3>Voici la table de multiplication de <span class=\"chiffre\">" + n + "</span> :</h3>"
    document.getElementById("table").innerHTML = tableau.join("<br>")
}

table_de_multiplication()