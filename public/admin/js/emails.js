async function getEmails() {
    return await fetch('http://localhost:3000/emails')
                            .then((response) => response.json())
                            .then((data) => data);
}

let EmailsBlock = document.querySelector('#v-pills-mail');

EmailsBlock.addEventListener('click', function (e) {
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('http://localhost:3000/emails/' + id, {
            method:'DELETE'
        }).then((resp) => resp.text())
        .then(() => window.history.go());
    }
})