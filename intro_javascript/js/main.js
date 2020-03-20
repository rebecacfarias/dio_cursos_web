function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("http://www.uepb.edu.br/alunos/");
    //window.location.href = ""; abre na mesma janela e volta
}


//pode fazer com getElementById tb, aí so troca noq tem o id
function trocar(elemento){
    elemento.innerHTML = "Obrigado volte sempre";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*

- BASICO -
ANOTACOES DE SINTAXE: 

nao tipada, "" para string

IMPRESSAO DE CONSOLE, ALERT, STRING
console.log -> imprime no console
String.replace("palabra","nova palavra") ->substituir palavras na String
.toUpperCase
.toLowerCase
var name = "Rebeca Farias";
var ano = 2020;
alert("Bem vinda "+name+", "+ano);

LISTAS
var lista = ["eu","vc","zubumafu"];
lista.push("zumubafu");
lista.pop(); // tira o ultimo
lista.length();
lista.reverse();
lista.toString(); // transforma em string forever perde o array
lista.join(" - "); muda o separador qnd impressa a lista

DICIONARIO
var fruta = {nome: "maça",cor:"vermelha"} //estrutura
alert(fruta.cor)
console.log(fruta.nome)
var frutas = [{nome: "uva",cor: "verde"},{nome: "maca",cor: "vermelha"}]

CONDICIONAL (+prompt -> exibe pergunta e le valor)
var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
LAÇOS
var count = 0;
while(count<5){
    console.log(count);
    count++;
}
var count;
for(count=1; count<=5;count++){
    alert(count);
}

var d = new Date();
alert(d);
alert(d.getMonth()+1);  //mes tem q bota+1, getDay, getHours etc

function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
}

alert(setReplace("Bora beber","beber","estudar"));

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));
_____________________________________

*/







