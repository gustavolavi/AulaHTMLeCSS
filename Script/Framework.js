function onlyNumer(camp) {
    var r = false;
    r = isNotNull(camp);
    if (r) {
        r = isNumber(camp);
    }

    return r;
}

function isNotNull(camp) {
    var valor = $(camp).value;
    var erro = $("erro-" + camp);
    if (valor == "") {
        erro.style.backgroundColor = "red";
        erro.style.padding = "5px";
        erro.style.color = "#fff";
        erro.innerHTML = "Este campo está vazio";
        return false;
    } else {
        erro.style.backgroundColor = "#FFF";
        erro.innerHTML = "";
        return true;
    }
}

function isNumber(camp) {
    var valor = $(camp).value;
    var erro = $("erro-" + camp);

    var regex = /^[a-zA-Z]+$/;

    if (valor.match(regex)) {
        erro.style.backgroundColor = "red";
        erro.style.padding = "5px";
        erro.style.color = "#fff";
        erro.innerHTML = "Este campo deve conter apenas numeros";
        return false;
    } else {
        erro.style.backgroundColor = "#FFF";
        erro.innerHTML = "";
        return true;
    }
}

var $ = function (campo) {
    return document.getElementById(campo);
}