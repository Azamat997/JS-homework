let form = document.querySelector('.form')
let masofa = document.querySelector('.masofa')
let inson = document.querySelector('.inson')
let velosped = document.querySelector('.velosped')
let  car = document.querySelector('.car')
let  airplane = document.querySelector('.airplane')



let result1 = document.getElementById('result1')
let result2 = document.getElementById('result2')
let result3 = document.getElementById('result3')
let result4 = document.getElementById('result4')

// let masofa =+ prompt('Masofani kiriting nechi km ?')
// let piyoda =+ prompt ('Piyoda o\'rtacha tezligi ?')
// let mashina =+ prompt ('Mashina o\'rtacha tezligi ?')
// let samalyot =+ prompt ('Samalyot o\'rtacha tezligi ?')


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    document.getElementById('result1').innerHTML = (masofa.value/inson.value).toFixed(2);
    document.getElementById('result2').innerHTML = (masofa.value/velosped.value).toFixed(2);
    document.getElementById('result3').innerHTML = (masofa.value/car.value).toFixed(2);
    document.getElementById('result4').innerHTML = (masofa.value/airplane.value).toFixed(2);
})


