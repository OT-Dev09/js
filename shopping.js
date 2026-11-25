// Modern Js is written like this
// const addItem = () => {
// }


let cart = JSON.parse(localStorage.getItem('item')) || []

function addItem() {
    let userInput = document.getElementById('input').value
    let displayArea = document.getElementById('display')
    if (userInput.trim() == '') {
        alert('Kindly Fill your item')
    } else {
        cart.push(userInput)
        localStorage.setItem('item', JSON.stringify(cart))
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
        localStorage.setItem('item',JSON.stringify(cart))
        displayItem()
    }

}

function deleteAll() {
    let check = confirm('are you sure you want to delete all?')
    if (check) {
        cart.splice(0, cart.length)
        document.getElementById('display').innerHTML = `<p>Your Selected Items Are Deleted</p>`
    }
    else if (cart.length == 0) {
        alert('There is nothing to delete')
    }
}

function displayItem() {
    document.getElementById('display').innerHTML = ''
    for (let index = 0; index < cart.length; index++) {

        document.getElementById('display').innerHTML += `<p>${index + 1}. ${cart[index]} <button onclick='deleteItem(${[index]})'>Delete</button></p>`
    }
}

function deleteItem(index) {
    let check = confirm('are you sure you want to delete?')
    if (check) {
        cart.splice(index, 1)
        localStorage.setItem('item',JSON.stringify(cart))
        displayItem()
    } else {
        displayItem()
    }

}

displayItem()
