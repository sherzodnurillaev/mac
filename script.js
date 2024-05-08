const img = document.querySelector('img')
const white = document.querySelector('.white')
const space = document.querySelector('.space')

const spa = document.querySelector('span')
const p_ = document.querySelector('.pp')

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')

white.onclick = () => {
    img.setAttribute('src', './images/mac_white.png')
    white.style.backgroundColor = 'rgb(21, 76, 255)'
    white.style.color = '#fff'
    space.style.backgroundColor = 'rgb(161, 208, 255)'
    space.style.color = 'gray'
    white.style.transition = '.8s ease'
    spa.innerHTML = 'White'
    p_.innerHTML = '$1999'
}

space.onclick = () => {
    img.setAttribute('src', './images/mac_silver.png')
    space.style.backgroundColor = 'rgb(21, 76, 255)'
    space.style.color = '#fff'
    white.style.backgroundColor = 'rgb(161, 208, 255)'
    white.style.color = 'gray'
    space.style.transition = '.8s ease'
    spa.innerHTML = 'Space Gray'
    p_.innerHTML = '$1999'
}
one.onclick = () => {
    one.style.border = '2px solid rgb(21, 76, 255)'
    two.style.border = ''
    three.style.border = ''
    four.style.border = ''
    p_.innerHTML = '$1999'
    
}
two.onclick = () => {
    two.style.border = '2px solid rgb(21, 76, 255)'
    p_.innerHTML = `$${1999 + 200}`
    one.style.border = ''
    three.style.border = ''
    four.style.border = ''
}
three.onclick = () => {
    three.style.border = '2px solid rgb(21, 76, 255)'
    p_.innerHTML = `$${1999 + 600}`
    one.style.border = ''
    two.style.border = ''
    four.style.border = ''
}
four.onclick = () => {
    four.style.border = '2px solid rgb(21, 76, 255)'
    p_.innerHTML = `$${1999 + 1200}`
    one.style.border = ''
    two.style.border = ''
    three.style.border = ''
}


