//funcao como atributo
/*
let estudante = {
  nome: "carla",
  sobrenome: "Garcia",
  idade: "14",
  materiaFavorita: "matemática",
  nomeCompleto() {
    return `${estudante.nome} ${estudante.sobrenome}`;
  },
};

console.log(estudante.nomeCompleto());
*/

var student = {
  primeiroNome1: "Monica",
  set changeName(primeiroNome2) {
    this.primeiroNome1 = primeiroNome2;
  },
};
console.log(student.primeiroNome1);
student.changeName = "Sara";
console.log(student.primeiroNome1);
