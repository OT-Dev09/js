// Modern Js is written like this
// const addItem = () => {
    // }


let cart = []  

function addItem(){
    let userInput = document.getElementById('input').value
    let displayArea = document.getElementById('display')
    if(userInput.trim() == ''){
        alert('Kindly Fill your item')
    }else{
        cart.push(userInput)
        console.log(cart);
        document.getElementById('input').value = ''
        document.getElementById('display').innerHTML = ''
        for (let index = 0; index < cart.length; index++) {
            
            document.getElementById('display').innerHTML += `<p>${index +1}. ${cart[index]}</p>`
        }
        
    }
}