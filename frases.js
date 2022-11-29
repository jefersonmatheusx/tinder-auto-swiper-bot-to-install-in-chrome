const textArray = require('./questions')

function getFirstPerson() {
	let aTags = document.getElementsByClassName('matchListItem')
	aTags[2].click()
}

function setText() {
	let inp = document.getElementsByTagName('TextArea')[0]
	let msg = textArray[Math.floor(Math.random() * textArray.length)]
	inp.value += msg
	inp.innerHTML += msg
}

function setEmoji() {
	let emojiPicked = document.querySelector(
		'body > div.emoji-picker__wrapper > div > div.emoji-picker__content > div > div.emoji-picker__emojis > div:nth-child(4) > button:nth-child(2)',
	)
	emojiPicked.click()
}

function sendMsg() {
	let buttonSend = document.querySelector('[type="submit"]')
	buttonSend.click()
}

/**
 pedaço de código que automatiza as mensagens enviando um emoji (a sacada é o emoji, então nunca remova).  e lembre que o botão do emoji só funciona com a tela maior (tela reduzida não funciona)

 **/

let intervalo = setInterval(() => {
	getFirstPerson()
	setTimeout(() => {
		setText()
		setTimeout(() => {
			setEmoji()
			sendMsg()
		}, 1000)
	}, 1000)
}, 3000)

clearInterval(intervalo) // caso queira parar apenas ensira no console e dê enter
