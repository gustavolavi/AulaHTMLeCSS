window.onload = function () {

    document.getElementById("somar").onclick = function () {
        var n1 = document.getElementById("numero1").value;
        var n2 = document.getElementById("numero2").value;

        if (n1.length < 1 || n2.length < 1) {
            document.getElementById("resposta").innerHTML = "os valores devem conter mais de 1 numero";
            document.getElementById("resposta").style.color = "#FFF";
            document.getElementById("resposta").style.backgroundColor = "red";
        } else {
            var numero2 = parseInt(n2);
            var numero1 = parseInt(n1);
            var calculo = numero1 + numero2;
            document.getElementById("resposta").innerHTML = calculo;
            document.getElementById("resposta").style.color = "black";
            document.getElementById("resposta").style.backgroundColor = "green";
        }
    }

}

function validarCaracteresMinimo(campo,numeroDeCaracteres)
{
    var c = document.getElementById(campo).value;
    if (c.length >= numeroDeCaracteres) {
        return true;
    } else {
        return false;
    }
}