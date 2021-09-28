import axios from "axios"
import 'regenerator-runtime/runtime';


const getFieldData = () => {
    const fields = {
        "guestName": document.getElementById("guestName").value,
        "age": document.getElementById("age").value,
        "gender": document.getElementById("gender").value,
        "invitedBy": document.getElementById("invitedBy").value,
        "email": document.getElementById("email").value,
        "phone": document.getElementById("phone").value
    }
    return fields
}

const postData = () => {

    const guest = getFieldData()
    console.log(guest)

    const result = axios.post("https://49vtev7gzg.execute-api.sa-east-1.amazonaws.com/dev/guest", guest)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            window.alert("Email já foi cadastrado ou não existe")
        })
    const response = () => {
        result.then((m) => {
            if (m != undefined) {
                console.log(m)
                window.alert("Pessoa cadastrada com sucesso")
                window.location.href = "index.html";
            }
        })
    }
    response()
}

var btn = document.getElementById("btn");
btn.addEventListener("click", () => { postData() }, false);