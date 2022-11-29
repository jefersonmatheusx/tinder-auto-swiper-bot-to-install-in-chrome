const textArray = require('./questions')

function getFirstPerson(i) {
	let listChat = document.getElementsByClassName('messageListItem')
	let filteredList = []

	let crush = /[cC]ru[sc]h/g
	for (const element of listChat) {
		if (crush.test(element.getElementsByClassName('messageListItem__message')[0].innerText)) {
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
		'body > div.emoji-picker__wrapper > div > div.emoji-picker__content > div > div.emoji-picker__emojis > div:nth-child(4) > button:nth-child(2)',
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
