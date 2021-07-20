document.addEventListener('readystatechange', e => {
  if (e.target.readyState == 'complete') {
    initApp()
  }
})

function initApp() {
  const hamburguer = document.getElementById('hamburguer')
  const menu = document.getElementById('menu')

  hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
  })


  const header = document.getElementById('header')

  document.addEventListener('scroll', e => {
    if (window.scrollY >= 65) {
      header.classList.add('scroll')
    } else if (header.classList.contains('scroll')) {
      header.classList.remove('scroll')
    }
  })
}