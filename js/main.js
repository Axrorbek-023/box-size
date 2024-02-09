var elBox = document.querySelector('.box')

function tepa(){
    elBox.style.transform.translateY = '-100px'
    elBox.style.background = 'green'
    elBox.style.borderRadius = '10%'
    elBox.style.transition = '1.5s'
}

function ong(){
    elBox.style.transform.translateX = '-100px'
    elBox.style.background = 'red'
    elBox.style.borderRadius = '20%'
    elBox.style.transition = '1.5s'
}

function past(){
    elBox.style.transform.translateY = '-100px'
    elBox.style.background = 'yellow'
    elBox.style.borderRadius = '30%'
    elBox.style.transition = '1.5s'
}

function chap(){
    elBox.style.transform.translateX = '-100px'
    elBox.style.background = 'blue'
    elBox.style.borderRadius = '50%'
    elBox.style.transition = '1.5s'
}