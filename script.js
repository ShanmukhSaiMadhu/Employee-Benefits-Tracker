const scriptUrl = 'https://script.google.com/macros/s/AKfycbwZYEuJWzqL0nxViFYMDKLPbK1VVVrwLopo2SnFRmDDvWsUSCXQJcWH6Te09MK9rlHI/exec';

const form = document.forms['google-sheet'];



const category_dropdown = document.getElementById('category-dropdown');

// const category_drop = document.querySelectorAll('.category-drop')

const category_toggle = document.getElementById('category-toggle');


category_dropdown.addEventListener('click', () => {
    if(category_toggle.style.display === 'block') {
        category_toggle.style.display = 'none';
    }
    else {
        category_toggle.style.display = 'block';
    }
});

// Sending data to Google Sheet
form.addEventListener('submit', e => {

    e.preventDefault();

    fetch(scriptUrl, {method: 'POST' , body: new FormData(form)})
        .then(response => console.log('Success', response))
        .catch(error => console.error('Error!', error.message))
});

// checkBox
let last;
document.addEventListener('input', (e) => {
    if(e.target.getAttribute('name') == "Currency") {
        if(last)
        last.checked = false;
    }
    e.target.checked = true;
    last = e.target;
})