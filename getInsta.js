/** para obter uma lista do instagram de cada pessoa na lista do chat **/

let instaList = []
let listChat = document.getElementsByClassName('messageListItem')
let i = 0
let interval = setInterval(() => {
  listChat[i].click()
  let [profile] = document.getElementsByClassName('profileCard__card')
  let perfil = profile.textContent
  let begins = []
  let re = /@|[I,i]nsta/g
  let match
  while ((match = re.exec(perfil))) {
    begins.push(match.index)
  }
  begins.forEach((begin) => {
    if (begin > 0) {
      let insta = perfil.substr(begin)
      instaList.push({ insta, id: i })
    }
  })

  console.log(
    i + '/' + listChat.length + ' instagrans:' + JSON.stringify(instaList)
  )
  i++
  if (i == listChat.length) {
    clearInterval(interval)
  }
}, 1000)

//clearInterval(interval)
