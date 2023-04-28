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
function generate() {

    let data = {
        number: numberEle.value,
        date: dateEle.value,
        sender: senderEle.value,
        receiver: receiverEle.value,
        content: contentEle.value,
        quantite: quantiteEle.value,
    }

    console.log(data);
    axios.post('/', data,{ responseType: 'blob' })
        .then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        })
        .catch((err) => console.log(err))
}