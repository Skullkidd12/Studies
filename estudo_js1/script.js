// objeto
var eu = {
  idade: 24,
  nome: "renan",
  sobrenome: "araujo",
  trabalho: "designer",
};
//array
var array = [1, 0.2, "urso"];

//function
function cleber() {
  window.alert("funçao ativada");
}
//function2
function cleber2() {
  window.alert("funçao ativada no botao2");
}

//Button na Var
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");

//event handler - pode ser no html-
//da pra colocar so 1

/*
button1.onclick = () => {
  cleber()
}
button2.onmouseover = () =>{
    cleber2()

}
*/

//event listener >>>>> variavel.addEventListener('evento', nomeFuncao)
//da pra colocar varios

button1.addEventListener("mouseover", cleber);
button1.addEventListener("mouseover", cleber2);
