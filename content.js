const intervalo = setInterval(() => {
  randomNo = Math.random()

  var aTags = document.getElementsByTagName('button')
  var curti = 'Curti'
  var descurti = 'Não'
  var found
  var like
  var dislike
  var find = 0
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == curti) {
      like = found = aTags[i]
      find++
    }
    if (aTags[i].textContent == descurti) {
      dislike = found = aTags[i]
      find++
    }
    if (find == 2) {
      break
    }
  }
  // var like = document.querySelector('[aria-label="Curti"]')
  // var dislike = document.querySelector('[aria-label="Não"]')
  var timer = document.querySelectorAll('[role="timer"]')[0]
  if (timer) {
    clearInterval(intervalo)
  }
  if (like !== null) {
    if (randomNo <= 0.85) {
      like.click()
    } else {
      dislike.click()
    }
  }
}, 400)

// pedaço de código que automatiza as mensagens enviando um emoji (a sacada é o emoji nunca remova) de coração (ou qualquer outro).  e lembre que o botão do emoji só funciona com a tela maior (tela reduzida não funciona)
// var intervalo = setInterval(() => {
//   var aTags = document.getElementsByClassName('matchListItem')
//   aTags[0].click()
//   setTimeout(() => {
//     var emojiChoice = document.getElementById('emoji-picker-trigger')
//     setTimeout(() => {
//       var inp = document.getElementsByTagName('TextArea')[0]
//       var msg = 'oi Crush! tudo bem com você?'
//       inp.value +=  msg
//       inp.innerHTML += msg
//       var emojiPicked = document.querySelector(
//         '[title="rosto sorridente com 3 corações"]'
//       )
//       emojiPicked.click()
//   ​
//       var buttonSend = document.querySelector('[type="submit"]');
//   buttonSend.click()
//     }, 500)
//   }, 1000)
//   },2000)
  
//   clearInterval(intervalo)
