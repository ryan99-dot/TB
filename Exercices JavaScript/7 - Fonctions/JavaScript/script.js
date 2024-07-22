function f(x,y){
    x=prompt("Entrez un nombre");
    y=prompt("Entrez un multiplicateur");
    document.getElementById("cube").innerHTML = "Le cube de "+x+" est égal à "+x*x*x;
    document.getElementById("produit").innerHTML = "Le produit de "+x+" x "+y+" est égal à "+x*y;
}

function afficheImg(image){
    document.getElementById("photo").src=image;
}

f()
afficheImg("../CSS/img/papillon.jpg")