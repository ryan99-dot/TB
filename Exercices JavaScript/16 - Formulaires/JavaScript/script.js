let filtre_caractere = new RegExp(/^[A-Za-zÀ-ÿ-]+$/)
console.log("La valeur du nom de société est : "+filtre_caractere.test("societe"))
console.log("La valeur du nom de la personne à contacter est : "+filtre_caractere.test("personne"))
let filtre_code_postal = new RegExp(/^\d{5}$/)
console.log("La valeur du code postal est : "+filtre_code_postal.test("code_postal"))
console.log("La valeur du nom de la ville est : "+filtre_caractere.test("ville"))
let filtre_email = new RegExp(/^\S+@\S+\.\S+$/)
console.log("La valeur de l'adresse email est : "+filtre_email.test("email"))

function verif(){
    let societe = document.getElementById("societe").value;
    let personne = document.getElementById("personne").value;
    let code_postal = document.getElementById("code_postal").value;
    let email = document.getElementById("email").value;
    if (filtre_caractere.test(societe) == false) {
        alert("Entrez le nom de la société")
    }
    if (filtre_caractere.test(personne) == false) {
        alert("Entrez le nom de la personne à contacter")
    }
    if (filtre_code_postal.test(code_postal) == false) {
        alert("Entrez le code postal sur 5 chiffres")
    }
    if (filtre_email.test(email) == false) {
        alert("Entrez une adresse mail valide")
    }
}



