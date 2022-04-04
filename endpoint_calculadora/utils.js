
function somar(a, b) {
    if (isNaN(a) || isNaN(b)){
        return "Por favor, informe dois números!";}
    return `O resultado é ${Number(a)+Number(b)}`;
  }

function subtrair(a, b) {
if (isNaN(a) || isNaN(b)){
    return "Por favor, informe dois números!";}
return `O resultado é ${Number(a)-Number(b)}`;
}

function multiplicar(a, b) {
    if (isNaN(a) || isNaN(b)){
        return "Por favor, informe dois números!";}
    return `O resultado é ${Number(a)*Number(b)}`;
    }

function dividir(a, b) {
    if (isNaN(a) || isNaN(b)){
        return "Por favor, informe dois números!";}
    if (Number(b)==0){
        return "O divisor não pode ser zero. Por favor, informe outro número.";}
    return `O resultado é ${Number(a)/Number(b)}`;
    }


module.exports = {somar, subtrair, multiplicar, dividir}