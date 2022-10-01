let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let turnBtn = document.getElementById('turnBtn')

const turnColor = () => {
    if (red.style.backgroundColor === 'red') {
        yellow.style.backgroundColor = 'yellow'
        setTimeout(() => {
            red.style.backgroundColor = 'black'
            yellow.style.backgroundColor = 'black'
            green.style.backgroundColor = 'green'
            turnBtn.innerText = `Turn red!`
        }, 3000)
    } else if (green.style.backgroundColor === 'green') {
        green.style.backgroundColor = 'black'
        yellow.style.backgroundColor = 'yellow'
        setTimeout(() => {
            yellow.style.backgroundColor = 'black'
            red.style.backgroundColor = 'red'
            turnBtn.innerText = `Turn green!`
        }, 3000)
    }
}

red.style.backgroundColor = 'red'
turnBtn.innerText = `Turn green!`

turnBtn.addEventListener('click', turnColor)
