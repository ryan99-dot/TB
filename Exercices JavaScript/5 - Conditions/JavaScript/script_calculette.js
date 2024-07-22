let x;
let y;
let operateur;
x=prompt("Premier nombre ?");
operateur=prompt("Quelle opération voulez-vous faire ? (+, -, * ou /)");
y=prompt("Deuxième nombre ?");
if(operateur=="+"){alert(parseInt(x)+parseInt(y))}
else if (operateur=="-"){alert(x-y)}
else if (operateur=="*"){alert(x*y)}
else if (operateur=="/")
    if (y!=0){alert(x/y)}
    else{alert("Erreur ! On ne peut pas diviser par 0")}
else{alert("Veuillez rentrer un opérateur valide")}

