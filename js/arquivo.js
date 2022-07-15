
function insert(num){   
    var numero = document.getElementById('resultado').innerHTML; // ao clicar em um botão, vai inserir no p resultado(caixinha de visor)
    document.getElementById('resultado').innerHTML = numero + num; // para quando apertar dois numeros ou mais, concatenar. exemplo 62,104..
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1) // ele vai apagar um numero de cada 
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); // o eval é um comando do js para dar o resultado 
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }

}