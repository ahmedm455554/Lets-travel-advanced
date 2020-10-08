

let createForm = document.querySelector('.create-post-form');
let createTitle = document.querySelector('#create-title');
let createCountry = document.querySelector('#create-country');
let createImageURL = document.querySelector('#create-image-url');
let createText = document.querySelector('#create-text');
let createImageFile = document.querySelector('#create-image-file');

createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let text= createText.value;
    let data = new FormData();
    data.append('title',createTitle.value);
    data.append('country',createCountry.value);
    data.append('imageURL',createImageURL.value);
    data.append('text',text);
    data.append('description',text.substring(0, text.indexOf('.')+1));
    data.append('imageFile', createImageFile.files[0]);



    fetch('http://localhost:3000/posts', {
        method: 'POST',
        
        body: data
    }).then((response) => response.text()).then((data)=> window.history.go());

})

function disableInput(input1, input2) {
    if (input1.value){
        input2.disabled=true;
    } else {
        input2.disabled=false;
    }
}

createImageURL.addEventListener('change', function() {disableInput(this, createImageFile)});
createImageFile.addEventListener('change', function() {disableInput(this, createImageURL)});