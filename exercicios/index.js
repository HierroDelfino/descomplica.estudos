function getValue(){
    var value = document.getElementById("nome").value;
    document.getElementById("resultado").innerHTML = "Bem Vindo, " + value + "!";
}

function removeValue() {
    document.getElementById("nome").value = ""
    document.getElementById("resultado").innerHTML = "";
}