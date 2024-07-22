let saisie=true;
let nom;
let liste="";
let nombre=0;
while(saisie==true){
    saisie=confirm("Saisissez le prénom N°"+(parseInt(nombre)+parseInt(1))+"\nou Clic sur annuler pour arrêter la saisie.");
    if(saisie==true){
    nom=prompt();
    liste+=nom+" ";
    ++nombre;}
}
alert(liste);
alert(nombre);