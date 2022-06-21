//FUNCAO COMO ATRIBUTO
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

//FUNCAO PRA MUDAR ATRIBUTO
/*
var student = {
  primeiroNome1: "Monica",
  set changeName(primeiroNome2) {
    this.primeiroNome1 = primeiroNome2;
  },
};
console.log(student.primeiroNome1);
student.changeName = "Sara";
console.log(student.primeiroNome1);
*/

// IFS EM SEQUENCIA
/*
var names = [
  "hole-in-one",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double bogey",
  "go home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 8));
*/

//EXEMPLO SWITCH

/*
function exemploSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta";
      break;

    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(exemploSwitch(3));
*/

//FUNÇÂO DEFAULT EM SWITCH
/*
function switchDasCoisas(valor) {
  var resposta = "";
  switch (valor) {
    case "bolo":
      resposta = "apple";
      break;

    case "boba":
      resposta = "bird";
      break;

    case "c":
      resposta = "cat";
      break;

    default:
      resposta = "stuff";
      break;
  }

  return resposta;
}

console.log(switchDasCoisas());
*/

function tamanhosSequenciais(valor) {
  let answer;
  switch (valor) {
    case 1:
    case 2:
    case 3:
      answer = "baixo";
      break;
    case 4:
    case 5:
    case 6:
      answer = "alto";
      break;
  }
  return answer;
}

console.log(tamanhosSequenciais(2));
