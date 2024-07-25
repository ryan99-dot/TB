let liste_exos = document.getElementById("listexos")
let menu_exos = document.getElementById("menu_exos")

menu_exos.addEventListener("mouseover", function () {
    liste_exos.style.display = "table-column"
})

menu_exos.addEventListener("mouseout", function () {
    liste_exos.style.display = "none"
})



let exercices = document.querySelectorAll(".exercices")

exercices.forEach(function(exercice){
    exercice.addEventListener("mouseover", function(){
        exercice.style.bakground="turquoise"
    })
})

/**exercices.addEventListener("mouseout", function () {
    exercices.style.background = "azure"
})**/