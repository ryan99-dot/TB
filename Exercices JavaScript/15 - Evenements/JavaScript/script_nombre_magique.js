let nm
function verif(){
    nm=Math.random()
    if (nm<textBox1.value){
        alert("Trop grand !")
        }
    else if (nm>textBox1.value){
        alert ("Trop petit !")
    }
    else {
        alert ("C'est le nombre magique. Bravo !")
    }
    }