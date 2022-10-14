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

/*
um script para achar conversas não lidas no meio da bagunça 
var unRead = $x('//*[@id="t1828694991"]/div[2]/a[1]/div[1]/div/div[2]')[0];
unRead.click()
*/
