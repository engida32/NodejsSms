
const number = document.getElementById('number'),
     textInput = document.getElementById('msg'),
     button = document.getElementById('button'),
     response = document.querySelector('.response');
     button.addEventListener('click',send, false);


function send() {
    const phoneNumber = number.value.replace(/\D/g, '');
    const message =  textInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ number, message })
    }).then(function (res) {
        console.log(res);
    })
        .catch(function (err) {
            console.log(err);
        });
        839
        console.log(phoneNumber);
        console.log(message)

}

