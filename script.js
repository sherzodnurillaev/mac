const img = document.querySelector('.mid img')
const btns = document.querySelectorAll('.but button')
const prices = document.querySelectorAll('.four_block button')
const txt = document.querySelector('.right p')
const rSpan = document.querySelector('.right span')

const priceOrg = 1999

const images = {
    white: './images/mac_white.png',
    space: './images/mac_silver.png',
}

btns.forEach(btn => {
    btn.onclick = () => {
        const imag = btn.className.toLowerCase()
        img.setAttribute('src', images[imag])
        rSpan.innerHTML = btn.innerHTML
    }
})

prices.forEach(price => {
    price.onclick = () => {
        const pr = +price.lastElementChild.innerHTML .split('+$').at(-1) || 0
        txt.innerHTML = `$${pr + priceOrg}`
    }
}) 
