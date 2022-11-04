let textArray = [
  'Pergunta importante: tacos ou pizza?',
  'Aposto que sua risada é tão vibrante quanto seu sorriso. Posso ouvi-lo algum dia? ',
  'Procurando recomendações: qual é a sua música favorita para quando você está limpando a casa?',
  'Eu amo seu estilo! Você sempre se vestiu assim? ',
  'Qual foi a última música que você ouviu?',
  'Qual foi o último livro que você leu? ',
  'Qual é a sua coisa favorita e menos favorita sobre esta cidade?',
  'Podemos simplesmente pular a conversa fiada e ir direto para o flerte? ',
  'Sobre o que você gostaria de saber mais?',
  'Ei desconhecida, quer parar de ser desconhecida? ',
  'Café da manhã, almoço ou Janta? qual seu preferido? ',
  'Qual é o seu prazer secreto secreto? ',
  'Você prefere passar o resto de sua vida vivendo em um trailer ou em um veleiro como sua casa? ',
  'O que seria se você pudesse comer apenas um alimento pelo resto de sua vida? ',
  'Qual é a sua definição de um fim de semana fantástico? ',
  'Se você fosse uma sobremesa, o que você seria?',
  'Com vontade de uma noite divertida? ',
  'Então, qual é o melhor lugar para o nosso primeiro encontro? ',
  'O que há de surpreendente em você que a maioria das pessoas não adivinharia?',
  'Qual é a coisa mais estranha que você acha atraente em alguém? ',
  'Se você pudesse ser qualquer animal do mundo, que animal você seria e por quê? ',
  'Estou procurando um bom filme esta noite. Qual é o seu filme favorito de todos os tempos? ',
  'Quais são suas prioridades de domingo? ',
  'Ei, você está deslumbrante. Vem sempre aqui? ',
  'As três melhores coisas para fazer em um sábado? ',
  'Que talento secreto você tem que ninguém conhece? ',
  'Você se considera competitiva?',
  'Você parece divertida — como está indo sua semana?',
  'Qual é a letra da sua música favorita que melhor descreve você?',
  'Pergunta rápida: quão aventureira você é?',
  'Então, pelo que você é apaixonada? ',
  'Onde você gostaria de estar se pudesse piscar e estar em qualquer lugar do mundo? ',
  'O que seria se você pudesse ter qualquer superpoder por um dia?',
  'Eu tenho algum tempo de folga chegando. Se você fosse eu, para onde iria? A praia, as montanhas ou dormir para um dia relaxante?',
  'Emprego dos sonhos: crítico gastronômico ou fotógrafo profissional de filhotes?',
  '3 coisas que você gostaria de fazer antes de morrer?',
  'Se fôssemos fazer um piquenique, que lanches você levaria? ',
  'O que você faria se ganhasse na loteria amanhã? ',
  'Qual é o próximo lugar na sua lista de viagens ?',
  'Onde você se vê daqui a 5 anos? ',
  'Se você tivesse que escolher: Chocolate amargo, cheesecake ou sorvete de sundae? ',
  'Se você pudesse assistir apenas a um programa de TV pelo resto de sua vida, qual seria?',
  'Qual playlist do Spotify você tem no repeat?',
  'Pelo que você seria mais provável de ficar famoso? ',
  'Pergunta aleatória: você tem um amuleto da sorte?',
  'Você acredita em destino ou acaso?',
  'Qual é a sua frase de filme favorita?',
  'Qual é o pior iniciador de conversa que você já teve neste aplicativo?',
  'O que você está desejando hoje?',
  'Você se descreveria como espontânea?',
  'Nós combinando é o melhor crossover desde Os Vingadores , você não acha?',
  'Nunca vi uma biografia melhor que a sua. Qual é a coisa mais emocionante sobre você? ',
  'Pessoa de gato ou cachorro? ',
  'Você é uma pessoa da manhã ou uma pessoa da noite? ',
  'Eu estava esperando que fôssemos combinar 🙂 ',
  'Você é o par mais bonito/bonito que já fiz neste aplicativo. ',
  'Se você responder a apenas uma mensagem hoje, podia ser a minha. ',
  'Não há palavra no dicionário para descrever o quão bonita você é.',
  'Eu quase deixei cair meu telefone quando percebi que combinamos. Eu só queria que você soubesse que você tem esse efeito em mim.',
  'OK, vamos compartilhar histórias ruins de encontros. Você vai primeiro😜',
  'Eu amo a cor dos seus olhos. ',
  'Você parece alguém que gosta de aventuras. ',
  'O que você faz que te deixa impressionado com a vida?',
  'Qual foi a coisa mais incrível que você já teve coragem de fazer?',
  'Você tem algum amigo de longa data que não se vê sem?',
  'O que você faz quando sobra um tempinho livre no dia?',
  'Qual seu animal favorito que não seja de estimação?',
  'Quais as características que você mais admira em uma pessoa?',
  'Qual qualidade sua você gostaria de ver mais por aí?',
  'Se pudesse ir ao seu destino dos sonhos hoje, você iria?',
  'Qual o cômodo de uma casa que você considera seu favorito?',
  'O que você gosta de fazer pelas manhãs?',
  'Você assiste alguma série que sente vergonha de contar para as pessoas?',
  'O que mais te dá tédio?',
  'Você é a favor ou contra ter uma rotina bem determinada?',
  'Você possui algum talento que tem vontade de desenvolver?',
  'Qual o sonho mais insano que você tem?',
  'Você é a favor ou contra dormir com a televisão ligada?',
  'Você viajaria para o passado ou para o futuro se fosse possível?',
  'Qual personalidade você faria amizade se fosse possível?',
  'Existe algum assunto que você falaria apaixonadamente por muitas horas?',
  'Qual animal você seria por um dia?',
  'Você realizou os sonhos que imaginava quando era criança?',
  'Qual cor de cabelo você tem vontade de ter, mas tem medo?',
  'Existe alguma série que você indica para todo mundo que conhece?',
  'Você trabalha com o que sempre sonhou?',
  'Você acha que o dia tem horas suficientes para fazer as coisas que gostaria?',
  'Se não precisasse trabalhar, o que faria o dia inteiro?',
  'Entre filmes e séries, o que você escolheria assistir se só pudesse ver um?',
  'Qual seu gênero literário favorito?',
  'Se sua vida fosse um filme, quais atores você gostaria para compor o elenco?',
  'Qual a situação mais engraçada que já aconteceu na sua vida?',
  'Qual imagem você gostaria que seu cérebro jamais esquecesse?',
  'Qual o significado do nome dos seus pets?',
  'Qual prato mais estranho você já comeu? Qual a mistura de comidas mais estranha que você gosta?',
  'Você é mais produtivo durante o dia ou a noite?',
  'A sua playlist favorita traduz a sua personalidade?',
  'Qual música você ouviria para sempre se só pudesse escolher uma?',
  'Se atividades domésticas fossem modalidade das olimpíadas, qual você seria campeão?',
  'Existe algum segredo que você não conta porque tem medo das pessoas rirem de você?',
  'Qual a bebida traduz sua personalidade e por quê?',
  'Qual filme melhor traduz a sua vida?',
  'Você gosta de rolê mais agitado ou mais caseiro?Qual seu date perfeito?',
  'Qual tipo de clima te deixa de bom humor?',
  'Se existisse teletransporte, para onde você iria agora?',
  'Se a sua casa pegasse fogo, quais itens você salvaria primeiro?',
  'Qual sonho você considera simples, mas ainda não conseguiu realizar?',
  'Qual lugar você visitou e não vê a hora de voltar?',
  'Quais qualidades você mais procura em um amigo?',
  'Qual lugar novo você gostaria de conhecer agora?',
  'O que não pode faltar num dia perfeito para você?',
  'Qual comida você não fica sem de jeito nenhum?',
  'Qual música te faz largar tudo e começar a dançar?',
  'Qual foi o sonho mais doido que você já teve? Consegue ver uma explicação?',
  'Qual foi o último filme que você viu que te fez chorar de tanto rir?',
  'O que te inspira a levar a vida com tanta leveza?',
  'Existe alguma frase que guia todos os seus passos?',
  'Qual show você gostaria de reviver se fosse possível?',
  'Se pudesse resumir sua vida numa frase, qual seria?',
  'Qual gosto pessoal ou característica sua que fogem ao seu personagem?',
  'Qual tatuagem você não faria nem se te pagassem?',
  'Você é uma pessoa fácil de agradar? E o que te tira do sério?',
  'O que te ajuda a não perder a cabeça quando algo te deixa irritado?',
  'Você prefere conversar depois quando a cabeça esfriar ou na hora?',
  'Você exerce a profissão que sonhava quando era criança?',
  'Nossos gostos falam muito sobre nós. Qual desenho …o você assistia repetidamente quando era criança?',
  'Você gosta de traçar metas? Quais são as que irá realizar no próximo ano?',
  'Você tem algum medo bobo que simplesmente não consegue explicar?',
  'Você tem algum propósito de vida que tem construído ao longo dos anos?',
  'Qual seu maior arrependimento que você voltaria atrás se pudesse?',
  'Qual música te lembra um momento feliz?',
  'Qual sua conquista que mais te deixa orgulhoso de você mesmo?'
]

function getFirstPerson(i) {
  let listChat = document.getElementsByClassName('messageListItem')
  let filteredList = []

  let crush = /[cC]ru[sc]h/g
  for (const element of listChat) {
    if (
      crush.test(
        element.getElementsByClassName('messageListItem__message')[0].innerText
      )
    ) {
      filteredList.push(element)
    }
  }

  console.log(i)
  filteredList[0].click()
}

function setText() {
  let inp = document.getElementsByTagName('TextArea')[0]
  let msg = textArray[Math.floor(Math.random() * textArray.length)]
  inp.value += msg
  inp.innerHTML += msg
}

function setEmoji() {
  let emojiPicked = document.querySelector(
    'body > div.emoji-picker__wrapper > div > div.emoji-picker__content > div > div.emoji-picker__emojis > div:nth-child(4) > button:nth-child(2)'
  )
  emojiPicked.click()
}

function sendMsg() {
  let buttonSend = document.querySelector('[type="submit"]')
  // buttonSend.click()
}

/**
 pedaço de código que automatiza as mensagens enviando um emoji (a sacada é o emoji, então nunca remova).  e lembre que o botão do emoji só funciona com a tela maior (tela reduzida não funciona)

 **/
let i = 0
let intervalo = setInterval(() => {
  getFirstPerson(i)
  setTimeout(() => {
    setText()
    setTimeout(() => {
      setEmoji()
      sendMsg()
      i++
    }, 1000)
  }, 1500)
}, 4000)

// clearInterval(intervalo) // caso queira parar apenas ensira no console e dê enter
