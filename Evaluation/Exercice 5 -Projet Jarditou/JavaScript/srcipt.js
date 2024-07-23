let filtre_caractere = new RegExp(/^[A-Za-zÀ-ÿ-]+$/)
let filtre_date = new RegExp(/^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9]([0-9][0-9])?$/)
let filtre_code_postal = new RegExp(/^\d{5}$/)
let filtre_email = new RegExp(/^\S+@\S+\.\S+$/)

function verif(){
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let date=document.getElementById("date").value;
    let code_postal=document.getElementById("code_postal").value;
    let email=document.getElementById("email").value;
    let question=document.getElementById("question").value


    if (filtre_caractere.test("nom") == false | nom=="") {
        alert("Entrez votre nom")
    }
    if (filtre_caractere.test("prenom") == false | prenom=="") {
        alert("Entrez votre prenom")
    }
    if (document.getElementById("sexe1").checked==false && document.getElementById("sexe2").checked == false)
        alert("Veuillez saisir votre sexe")

    if (filtre_caractere.test("date") == false) {
        alert("Entrez une date (JJ/MM/AAAA)")
    }
    if (filtre_code_postal.test("code_postal") == false) {
        alert("Entrez le code postal sur 5 chiffres")
    }
    if (filtre_email.test("email") == false | email=="") {
        alert("Entrez une adresse mail valide")
    }

    if (document.getElementById("sujet").value == ""){
        alert("Veuillez sélectionnez le sujet de votre demande")
    }

    if (question == ""){
        alert("Ecrivez votre question")
    }

    if (document.getElementById("acceptation").checked==false)
        alert("Acceptez le traitement informatique")

}