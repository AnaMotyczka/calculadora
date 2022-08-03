function menu(numero) 
{
    if (numero == 1) {
        var tempo, deslocamento;
        deslocamento= +prompt("Digite o deslocamento em km.");
        tempo = +prompt("Digite o tempo que levou seu deslocamento em horas.");
        Vmedia(deslocamento, tempo);
    }else if (numero == 2) {
        var raio;
        raio= +prompt("Digite o raio da sua circunferência.");
        Acircun(raio);
    }else if (numero == 3) {
        var lado;
        lado= +prompt("Digite o valor de um dos lados do quadrado.");
        Aquadra(lado);
    }else if (numero == 4) {
        var lado1, lado2;
        lado1= +prompt("Digite o valor de um dos lados deste retângulo.");
        lado2= +prompt("Digite o valor do outro lado deste retângulo.");
        Aretan(lado1, lado2);
    }else if (numero == 5) {
        var produto, desconto;
        produto= +prompt("Digite o valor do produto.")
        desconto= +prompt("Digite a porcentagem do desconto.")
        Dprodu(produto, desconto)
    }else if (numero == 0) {
        sair();
    } else {
        alert("Digite um número de 1 à 4 ou 0 para sair.")
    }
}

function Vmedia(deslocamento, tempo) 
{
 var total= deslocamento/tempo;
document.getElementById('total').value = total +" km/h";
}

function Acircun(raio) 
{
 var total= 3.14*(raio*raio)
 document.getElementById('total').value = total +" u²";
}

function Aquadra(lado) 
{
 var total= lado*lado
 document.getElementById('total').value = total +" u²";
}

function Aretan(lado1, lado2) 
{
 var total= lado1*lado2
 document.getElementById('total').value = total +" u²";   
}

function Dprodu(produto, desconto) 
{
 var total= (produto*desconto)/100  
 var total2= produto-total
 document.getElementById('total').value = "Desconto: R$" + total +", valor final: R$" +total2;
}
function sair() 
{
 alert("Obrigada(o) por utilizar nosso sistema!")    
}
function apagar() {
    document.getElementById('numero').value = " ";
    document.getElementById('total').value = " ";
}