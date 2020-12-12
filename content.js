const intervalo = setInterval(() => {
  randomNo = Math.random()
  var like = document.querySelector('[aria-label="Curti"]')
  var dislike = document.querySelector('[aria-label="Não"]')
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
