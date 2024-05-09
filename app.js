let listaSorteada = [];
function sorteador(){
    let quantidade = getInput('quantidade');
    let limiteInicial = getInput('de');
    let numeroSorteado = sortear();
    while (listaSorteada.length < quantidade){
        if (numeroSorteado <= limiteInicial) {
            return sorteador();
            } else {
                if (listaSorteada.includes(numeroSorteado)){
                    return sorteador()
                } else {
                    listaSorteada.push(numeroSorteado);
                    mostrador(listaSorteada);
                }
            }
    }
    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.add('container__botao');
}

function reiniciar (){
    listaSorteada = [];
    mostrador(' nenhum até agora');
}

function getInput (id){
    return document.getElementById(id).value;
}

function sortear (){
    let limiteFinal = getInput('ate');
    return parseInt(Math.random() * limiteFinal + 1);
}

 function mostrador(texto){
    let labelNumeros = document.getElementById('labelFinal');
    labelNumeros.innerHTML = `Números sorteados: ${texto}`;
 }