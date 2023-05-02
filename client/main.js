import axios from 'axios';
import './style.css'

const PORT = 5555
const HOST = 'http://localhost'
const API = 'http://localhost:' + PORT


// elements
const numberEle = document.getElementById('number')
const dateEle = document.getElementById('date')
const senderEle = document.getElementById('sender')
const receiverEle = document.getElementById('receiver')
const contentEle = document.getElementById('content')
const quantiteEle = document.getElementById('quantite')
const downloadBtn = document.getElementById('download')
const openBtn = document.getElementById('open')

// make the date input default value is now
dateEle.valueAsDate = new Date();

// add event listner
downloadBtn.onclick = download
openBtn.onclick = open

// handlers
function download(e) {
    e.preventDefault()
    let data = {
        number: numberEle.value,
        date: dateEle.value,
        sender: senderEle.value,
        receiver: receiverEle.value,
        content: contentEle.value,
        quantite: quantiteEle.value,
    }

    axios.post(API, data)
        .then((response) => {
            downloadFile(response.data)
        })
        .catch((err) => console.log(err))
}

function open(e) {
    e.preventDefault()
    let data = {
        number: numberEle.value,
        date: dateEle.value,
        sender: senderEle.value,
        receiver: receiverEle.value,
        content: contentEle.value,
        quantite: quantiteEle.value,
    }

    axios.post(API, data)
        .then((response) => {
            window.open(response.data, '_blank')
        }).catch((err) => console.log(err))
}

function downloadFile(url) {
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', url.split('/').slice(-1)[0])
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}