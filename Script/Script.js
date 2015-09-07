window.onload = function (e)
{
    document.getElementById("calcular").onclick = function fun()
    {
        var campo1SemErro = onlyNumer("primeiroNumero");
        var campo2SemErro = onlyNumer("segundoNumero");
        
        if (campo1SemErro && campo2SemErro) {
            var soma = parseInt($("primeiroNumero").value) + parseInt($("segundoNumero").value);
            document.getElementById("retorno").innerHTML = soma;
        }
    }
}