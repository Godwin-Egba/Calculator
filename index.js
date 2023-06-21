let input1 = document.getElementById('input1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn10 = document.getElementById('btn10')
let btn11 = document.getElementById('btn11')
let btn12 = document.getElementById('btn12')
let btn13 = document.getElementById('btn13')
let btn14 = document.getElementById('btn14')
let btn15 = document.getElementById('btn15')
let btn16 = document.getElementById('btn16')
let btn17 = document.getElementById('btn17')
let btn18 = document.getElementById('btn18')
let btn19 = document.getElementById('btn19')


btn13.addEventListener('click', ()=> { 

    let x = input1.value
    input1.value = x + 1

})

btn14.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 2
})

btn15.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 3
})

btn9.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 4
})

btn10.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 5
})

btn11.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 6
})

btn5.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 7
})

btn6.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 8
})

btn7.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 9
})

btn17.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + 0
})

btn18.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + '.'
})

btn8.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + '*'
})

btn12.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + '-'
})

btn16.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + '+'
})

btn4.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + '/'
})

btn19.addEventListener('click', ()=>{
    input1.value = eval(input1.value)

})

btn1.addEventListener('click', ()=>{
    input1.value = ''

})

btn3.addEventListener('click', ()=>{
    let x = input1.value
    input1.value = x.substring(0, x.length-1)

})

btn2.addEventListener('click', ()=>{

    let x = input1.value
    input1.value = x + '√'
    input1.value = Math.sqrt(x)
})