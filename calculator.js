let display = ''

function opration(value) {
    display += value
    document.getElementById("display").innerHTML = display
}

function clean() {
    display = ''
    document.getElementById("display").innerHTML = display
}

function result() {
    try {
        let answer = eval(display)
        document.getElementById("display").innerHTML = answer
        display = answer.toString()
    }
    catch(error){
        document.getElementById("display").innerHTML="Error"
    }
}

arr = ["aqua","pink","aquamarine","cadetblur","chocolate","cornflowerblue","orange","darkgray","greenyellow","khari","gray","gold","lightseagreen","steelblue","violet","chartreuse","coral"]
let counter=0;
setInterval(() => {
    document.body.style.backgroundColor = arr[counter]
    counter = (counter + 1)%17
},4000);