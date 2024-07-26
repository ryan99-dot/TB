/*Apparition du menu Exercices*/

let liste_exos = document.getElementById("listexos")
let menu_exos = document.getElementById("menu_exos")

menu_exos.addEventListener("mouseover", function () {
    liste_exos.style.display = "table-column"
})

menu_exos.addEventListener("mouseout", function () {
    liste_exos.style.display = "none"
})





/*Changer couleur fond du menu exercices*/

/**let exercices = document.querySelectorAll(".exercices")

for (i = 0; i < exercices.length; i++)
    exercice=exercices[i]
    exercice.addEventListener("mouseover", function(){
        exercice.style.background = "turquoise";
    })
    exercice.addEventListener("mouseout", function () {
        exercice.style.background = "azure"
    })

    })
}**/




/*Changer couleur d'écriture des ancres*/

/**let ancre=document.getElementsByTagName("a")

for (i=0; i<ancre.length; i++){
    a=ancre[i]
    a.addEventListener("mouseover", function(){
        a.style.color="darkslateblue"
    })
    a.addEventListener("mouseover", function(){
        a.style.color="black"})}**/

