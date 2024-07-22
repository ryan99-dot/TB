let tableau=new Array(n=prompt("Quelle est la taille du tableau ?"))
for (let i=0;i<n; ++i){
    tableau[i]=prompt("Quel est l'élément "+(parseInt(i)+parseInt(1))+" ?")
};
alert(tableau);