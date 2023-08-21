celciusInput = document.querySelector('#celcius > input')
fahrenheitInput = document.querySelector('#fahrenheit > input')
kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

// CELCIUS TO FAHRENHEIT AND KELVIN
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp * (9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    
})

// FAHRENHEIT TO CELCIUS AND KELVIN
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    
})

//KELVIN TO FAHRENHEIT AND CELCIUS
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp + 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})