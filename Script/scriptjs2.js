window.onload = function fun(e)
{
    $("somar").onclick = function () {
        calculo("somar");
    }

    $("subtrair").onclick = function () {
        calculo("subtrair");
    }

    $("dividir").onclick = function () {
        calculo("dividir");
    }
}

function $(campo){
    return document.getElementById(campo);
}

function getValueNumber(campo)
{
    var r = $(campo).value;
    return parseInt(r);
}

function calculo(tipo) {

    var n1 = getValueNumber("numero1");
    var n2 = getValueNumber("numero2");

    switch (tipo) {
        case "somar":
            $("resposta").innerHTML = n1 + n2;
            break;
        case "subtrair":
            $("resposta").innerHTML = n1 - n2;
            break;
        case "dividir":
            $("resposta").innerHTML = n1 / n2;
            break;
        default:
            $("resposta").innerHTML = "operação invalida";
            break;
    }
}