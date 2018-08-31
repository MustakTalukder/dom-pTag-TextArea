let title = document.getElementById('title');
let login = document.getElementById('login')
let signup = document.getElementById('signup')
let jumbotron = document.querySelector('.jumbotron')
let pdiv = document.querySelector('.pdiv')
let ptag = document.getElementById('ptag')


let intervalId

jumbotron.addEventListener('mouseenter', function () {
    clearInterval(intervalId)
})

jumbotron.addEventListener('mouseleave', function () {
    intervalId = start()
})


let arr = [

    {
        title: title.innerHTML.trim(),
        background: 'palegreen'
    },
    {
        title: 'Welcome twinkle Cats',
        background: 'skyblue'
    }
]

let flag = true

intervalId = start()

function start() {

    let intervalId = setInterval(() => {

        if (flag) {
            title.innerHTML = arr[0].title
            flag = false
            jumbotron.style.background = arr[0].background

        } else {
            title.innerHTML = arr[1].title
            flag = true
            jumbotron.style.background = arr[1].background

        }
    }, 1000)

    return intervalId

}

login.onclick = handler
signup.onclick = handler

function handler(event) {
    alert(`Button clicked [ ${event.target.innerHTML.trim()} ]`)
}


var ptagvalue = ""


ptag.addEventListener('click', function (event) {
    ptagvalue = event.target.innerHTML.trim()
    document.getElementById("ptag").remove()

    editArea(ptagvalue)

})

//console.log(ptagvalue);

let value = ""

function editArea(ptagvalue) {

    let createText = document.createElement('textarea')
    createText.setAttribute('id', 'text-area')
    createText.innerHTML = ptagvalue
    pdiv.appendChild(createText)

    createText.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            value = event.target.value
            addPT(value)
        }
    })

}

function addPT(value) {
    document.getElementById("text-area").remove()

    let newPT = document.createElement('p')
    newPT.setAttribute('id', 'text-area')
    newPT.innerHTML = value
    pdiv.appendChild(newPT)
}

