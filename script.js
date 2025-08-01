const perguntas = [
  {
    texto: "Você prefere acordar de manhã ou de noite?",
    opcoes: [
      { imagem: "2.jpg", valor: "manha" },
      { imagem: "4.jpg", valor: "noite" }
    ]
  },
  {
    texto: "Você foi convidado(a) pra um rolê, vai ficar em casa ou sair com os amigos?",
    opcoes: [
      { imagem: "5.jpg", valor: "casa" },
      { imagem: "6.jpg", valor: "sair" }
    ]
  },
  {
    texto: "Se você estivesse com fome. Qual você escolheria comer? a coxinha ou o brigadeiro?",
    opcoes: [
      { imagem: "7.jpg", valor: "doce" },
      { imagem: "8.jpg", valor: "salgado" }
    ]
  },
  {
  texto: "Se você só pudesse sair uma vez a cada 3 meses para o mesmo lugar, qual dos dois você escolheria?",
  opcoes: [
    { imagem: "4 (2).jpg", valor: "hamburguer" },
    { imagem: "3.jpg", valor: "pizza" }
  ]
},
{
  texto: "Você prefere praia ou piscina?",
  opcoes: [
    { imagem: "7 (2).jpg", valor: "praia" },
    { imagem: "8 (2).jpg", valor: "piscina" }
  ]
},
{
  texto: "Você prefere passar frio ou calor?",
  opcoes: [
    { imagem: "5 (2).jpg", valor: "calor" },
    { imagem: "6 (2).jpg", valor: "frio" }
  ]
},
{
  texto: "Você prefere qual dos dois?",
  opcoes: [
    { imagem: "9.jpg", valor: "piquinique" },
    { imagem: "10.jpg", valor: "cinema" }
  ]
},
{
  texto: "Qual dos dois animais você acha que tem mais chances de sobreviver?",
  opcoes: [
    { imagem: "1 (2).jpg", valor: "tubarão" },
    { imagem: "2 (2).jpg", valor: "Leão" }
  ]
}
];

const resultados = {
  refrescante: "Você é como um sorvete: leve, alegre e sempre refrescante!",
  doce: "Você é como um bolo: doce, acolhedor e sempre traz conforto.",
  aconchegante: "Você é como um prato de macarrão: aconchegante e versátil.",
  pratico: "Você é como um hambúrguer: rápido, direto e cheio de personalidade.",
  familiar: "Você é como um almoço de domingo: feito pra reunir e partilhar.",
  independente: "Você é como um lanche rápido: eficiente e cheio de autonomia.",
  leve: "Você é como uma salada de frutas: leve, natural e cheia de energia boa.",
  pesado: "Você é como uma feijoada: marcante, intensa e inesquecível.",
  espontaneo: "Você é como um refrigerante gelado: imprevisível, animado e refrescante.",
  controlado: "Você é como um copo d’água: calmo, necessário e equilibrado."
};

let indice = 0;
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");

function responder(valor) {
  indice++;
  if (indice < perguntas.length) {
    atualizarPergunta();
  } else {
    mostrarResultado(valor);
  }
}

function atualizarPergunta() {
  const atual = perguntas[indice];
  perguntaEl.textContent = atual.texto;
  opcoesEl.innerHTML = "";

  atual.opcoes.forEach(opcao => {
    const img = document.createElement("img");
    img.src = opcao.imagem;
    img.alt = opcao.valor;
    img.onclick = () => responder(opcao.valor);
    opcoesEl.appendChild(img);
  });
}

function mostrarResultado() {
  const contagem = {};
  respostasSelecionadas.forEach((res) => {
    contagem[res] = (contagem[res] || 0) + 1;
  });

  let maiorResposta = null;
  let max = 0;
  for (const res in contagem) {
    if (contagem[res] > max) {
      max = contagem[res];
      maiorResposta = res;
    }
  }

  perguntaEl.textContent = resultados[maiorResposta] || "Você é uma sobremesa misteriosa!";
  opcoesEl.innerHTML = "";

  // Mensagem final
  const mensagemFinal = document.createElement("p");
  mensagemFinal.textContent = "Obrigado por participar!";

  // Botão para recomeçar
  const botaoRecomecar = document.createElement("button");
  botaoRecomecar.textContent = "Recomeçar";
  botaoRecomecar.onclick = reiniciarQuiz;

  opcoesEl.appendChild(mensagemFinal);
  opcoesEl.appendChild(botaoRecomecar);
}

function reiniciarQuiz() {
  indicePergunta = 0;
  respostasSelecionadas = [];
  mostrarPergunta();
}

function mostrarResultado(valor) {
  perguntaEl.textContent = "... " + tipoDeComida(valor) + "!";
  opcoesEl.innerHTML = "";
}

function tipoDeComida(valor) {
  switch (valor) {
    case "manha":
      return "waffle com mel";
    case "noite":
      return "fondue de chocolate";
    case "casa":
      return "pipoca quentinha";
    case "sair":
      return "pizza animada";
    case "doce":
      return "brigadeiro fofo";
    case "salgado":
      return "pastel crocante";
    default:
      return "Obrigada por participar <3❤";
  }
}

// Iniciar a primeira pergunta ao carregar
window.onload = () => {
  atualizarPergunta();
};