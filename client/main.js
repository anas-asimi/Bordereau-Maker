import axios from 'axios';
import './style.css'


// elements
const numberEle = document.getElementById('number')
const dateEle = document.getElementById('date')
const senderEle = document.getElementById('sender')
const receiverEle = document.getElementById('receiver')
const contentEle = document.getElementById('content')
const quantiteEle = document.getElementById('quantite')
const buttonEle = document.getElementById('submit')

// make the date input default value is now
dateEle.valueAsDate = new Date();

// add event listner
buttonEle.onclick = generate

// generate function
function generate(e) {

    let info = {
        number: numberEle.value,
        date: dateEle.value,
        sender: senderEle.value,
        receiver: receiverEle.value,
        content: contentEle.value,
        quantite: quantiteEle.value,
    }

    console.log(info);
    axios.post('/', info).catch((err) => console.log(err))
}