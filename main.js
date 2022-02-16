let screen = document.getElementById('inputScreen')
let calculatorBody = document.getElementById('calculatorBody')
let audioPlay = document.getElementById('audioPlay')
let screenValue = ''
let volume = false

calculatorBody.addEventListener('click', function (e) {
    let audio = new Audio('./audio/click.mp3')
    let button = e.target.innerText
    if (volume) {
        audio.play()
    }
    audioPlay.addEventListener('click', function () {
        volume = !volume
        audioPlay.classList.toggle('active')
    })
    if (button == 'C') {
        screenValue = ''
    }
    else if (button == '+' && screenValue && (!screenValue.endsWith('+')) && !screenValue.endsWith('-') && !screenValue.endsWith('*') && !screenValue.endsWith('/')) {
        screenValue = screenValue + button
    }
    else if (button == '-' && screenValue && (!screenValue.endsWith('+')) && !screenValue.endsWith('-') && !screenValue.endsWith('*') && !screenValue.endsWith('/')) {
        screenValue = screenValue + button
    }
    else if (button == 'x' && screenValue && (!screenValue.endsWith('+')) && !screenValue.endsWith('-') && !screenValue.endsWith('*') && !screenValue.endsWith('/')) {
        screenValue = screenValue + '*'
    }
    else if (button == '÷' && screenValue && (!screenValue.endsWith('+')) && !screenValue.endsWith('-') && !screenValue.endsWith('*') && !screenValue.endsWith('/')) {
        screenValue = screenValue + '/'
    }
    else if (button == '.' && !screenValue.includes('.')) {
        screenValue = screenValue + '.'
    }
    else if (button == '=' && screenValue) {
        screenValue = eval(screenValue) + ''
    }
    else if (button == '%' && screenValue) {
        screenValue = (eval(screenValue) / 100) + ''
    }
    else if (button == '→') {
        screenValue = screenValue.substr(0, screenValue.length - 1)
    }
    else if (button == '^' && screenValue) {
        screenValue = screenValue * screenValue
    }
    else if (button == '√' && screenValue) {
        screenValue = Math.sqrt(screenValue)
    }
    else if (isNaN(button)) {
        console.log(button)
    } else {
        screenValue = screenValue + button
        console.log(screenValue)
    }
    screen.value = screenValue
})
