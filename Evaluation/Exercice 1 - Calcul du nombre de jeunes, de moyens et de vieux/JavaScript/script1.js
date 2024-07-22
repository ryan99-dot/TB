let age=0;
let tableau=[];
let i=1;
let jeune=0;
let moyen=0;
let vieux=0;
while (age < 100) {
    age = prompt("Saisir âge (la saisie s'arrête si âge est égal ou supérieur à 100)");
    tableau.push("Âge de la "+i+"e personne : "+age);
    i++;
    if (age<20){
        jeune++;
    }
    else if (age>40){
        vieux++
    }
    else{
        moyen++
    }
};
document.getElementById("table").innerHTML=tableau.join("<br>")
document.getElementById("decompte").innerHTML="Il y a <b>"+jeune+ "</b> personnes <span id=\"jeune\">de moins de 20 ans</span>, il y a <b>"+moyen+"</b> personnes <span id=\"moyen\">entre 20 et 40 ans</span> et il y a <b>"+vieux+"</b> personnes <span id=\"vieux\">de plus de 40 ans</span>."
