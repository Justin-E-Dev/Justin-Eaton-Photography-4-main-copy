let lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

let images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    let img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})

let teo = document.querySelector('button')
console.log('teo')