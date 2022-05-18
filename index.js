var tmp;

function mudarCor() {
    var obj = document.getElementById("dv1");
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var cor = "rgb(" + r + "," + g + "," + b + ")"; //para cor aleatória utiliza-se random e cores rgb
    obj.style.backgroundColor = cor;
}

//setTimeout() - é para um determinado tempo
//setInterval() - é para intervalo de tempo sucessivamente
function iniciar() {
    tmp = setInterval(mudarCor, 1000);
}

function parar() {
    clearInterval(tmp);
}


function addEventos() {
    document.getElementById("bt1").addEventListener("click", iniciar);
    document.getElementById("bt2").addEventListener("click", parar);
}

window.addEventListener("load", addEventos) // se colocar diretamente no body utilizar (onload())