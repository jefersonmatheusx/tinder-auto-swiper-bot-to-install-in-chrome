/** Esta funcionalidade irá filtrar pessoas que lhe mandaram mensagem mas não foram respondias e pessoas que não te responderam, talvez muito útil para recaptular uma conversa antiga */

let emitterNotReaden = true
let listChat = document.getElementsByClassName('messageListItem')
let filteredList = []

for (const element of listChat) {
  if (
    !!element
      .getElementsByClassName('messageListItem__message')[0]
      .querySelector('svg') == emitterNotReaden
  ) {
    filteredList.push(element)
  }
}

let i = 0
filteredList[i].click()

const myInterval = setInterval(() => {
  filteredList[i].click()
  i++
}, 15000)

// clearInterval(myInterval)
