function strtok(str1,str2,n){
    str1=prompt("Entrez une chaîne de caractère");
    str2=prompt("Quel est l'élément de séparation ?");
    n=prompt("Quel est l'emplacement du nom dans la liste ? (Entrez un nombre)");
    alert(str1.split(str2)[n-1]);
}

strtok()