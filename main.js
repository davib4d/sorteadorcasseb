var soma = 0;
var erro = 0;

document.getElementById('validacao').innerHTML = "";

function realizarSorteio(params) {
    document.getElementById('saida').innerHTML = "";

    var repetir = document.getElementById('numVezes').value;
    var maximo = document.getElementById('maximo').value;
    var minimo = document.getElementById('minimo').value;

    if(parseInt(maximo) < parseInt(minimo) || parseInt(maximo) == parseInt(minimo)){
        document.getElementById('validacao').innerHTML = "O intervalo de números está incorreto.";
        erro = 1;
        return erro = 1;
    }
    var invisivel = document.getElementById('invisivel');
    invisivel.style.visibility = "visible";
    document.getElementById('validacao').innerHTML = "";

    maximo++;
    var i = 0;

    numero_de_zeros = maximo.toString().length;

    conversor = '1';
    while(numero_de_zeros > 0){
        conversor = conversor+'0';
        numero_de_zeros--;
    }
    multiplicador = parseInt(conversor);

    soma=0;

    while(i != repetir){
        const randominteiro = Math.floor(Math.random()*multiplicador % maximo);
        if(randominteiro > minimo && randominteiro < maximo){
            document.getElementById('saida').innerHTML += "<span>"+randominteiro+"</span> ";
            soma += randominteiro;
            i++;
        }
    }
    return erro = 0;
}
function mostrarIntervalo(somar) {
    document.getElementById('validacao').innerHTML = "";
    if(erro == 1){
        document.getElementById('validacao').innerHTML = "O intervalo de números está incorreto.";
        return 0;
    }

    var maximo = document.getElementById('maximo').value;
    var minimo = document.getElementById('minimo').value;
    
    if(somar == true){
        document.getElementById('nomeSorteio').innerHTML = document.getElementById('textoSorteio').value;
        document.getElementById('intervalo').innerHTML = "Soma de todos os números que foram gerados no intervalo de " + minimo + " e " + maximo + ".";
    }else{
        document.getElementById('nomeSorteio').innerHTML = document.getElementById('textoSorteio').value;
        document.getElementById('intervalo').innerHTML = "Sorteio gerado para o intervalo de " + minimo + " e " + maximo + ".";
    }
}
function somarNumeros(params) {
    if(erro == 0){
        document.getElementById('saida').innerHTML = "<span>"+soma+"</span> ";
    }
}