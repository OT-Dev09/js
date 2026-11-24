// Modern Js is written like this
// const addItem = () => {
// }


let cart = []

function addItem() {
    let userInput = document.getElementById('input').value
    let displayArea = document.getElementById('display')
    if (userInput.trim() == '') {
        alert('Kindly Fill your item')
    } else {
        cart.push(userInput)
        console.log(cart);
        document.getElementById('input').value = ''
        displayItem()

    }
}

function deleteLast() {
    if (cart.length == '') {
        alert('there is nothing to delete')
    }
    else {
        cart.pop()
        displayItem()
    }

}

function deleteAll() {
    if (cart.length == 0) {
        alert('There is nothing to delete')
    } else {
        cart.splice(0, cart.length)
        document.getElementById('display').innerHTML = `<p>Your Selected Items Are Deleted</p>`
    }
}

function displayItem() {
    document.getElementById('display').innerHTML = ''
    for (let index = 0; index < cart.length; index++) {

        document.getElementById('display').innerHTML += `<p>${index + 1}. ${cart[index]} <button onclick='deleteItem(${[index]})'>Delete</button></p>`
    }
}

function deleteItem(index){
    cart.splice(index,1)
    document.getElementById('display').innerHTML = ''
    displayItem()
}

