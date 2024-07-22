let naissance;
let annee;
let age;
let majorite;
naissance=prompt("Quelle est votre année de naissance ?");
annee=prompt("En quelle année sommes-nous ?");
age=annee-naissance;
if(age>=18){majorite="majeur"}
else{majorite="mineur"};
alert("Vous avez "+age+" ans vous êtes donc "+majorite)

