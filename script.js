const scriptUrl = 'https://script.google.com/macros/s/AKfycbwZYEuJWzqL0nxViFYMDKLPbK1VVVrwLopo2SnFRmDDvWsUSCXQJcWH6Te09MK9rlHI/exec';

const form = document.forms['google-sheet'];

const category_dropdown = document.getElementById('category-dropdown');

const category_toggle = document.getElementById('category-toggle');

const category_clear= document.querySelectorAll('.category-clear');

const update_btn = document.getElementById('update-btn');

const message = document.getElementById('message');

const submit_btn = document.getElementById('submit-btn');


category_dropdown.addEventListener('click', () => {

    if(category_toggle.style.display === 'none') {
        
        category_toggle.style.display = 'block';
       
    }
    else {
        category_toggle.style.display = 'none';
    }
});

// Sending data to Google sheet
form.addEventListener('submit', (e) => {

    e.preventDefault();

    fetch(scriptUrl, {method: 'POST' , body: new FormData(form)})
        .then(response => $('#form_alert').html("<div class='alert rounded text-center w-75 alert-success'>Details updated successfully!</div>"))
        .catch(error => $('#message-container').html("<div class='alert alert-danger'>Update failed!</div>"))
        
    setTimeout(() => {
        $('#form_alert').html("");
    },5000)

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    submit_btn.style.display = 'block';
});

//When Update btn click category value delted

$('#category-dropdown').change(() =>{
    $('.category-clear').val('');
    // document.querySelectorAll('.category-checkbox').checked = false;
    $(".category-checkbox").prop("checked", false);
}); 

//Submit-btn 

let reload = () => {
    window.location.reload();
};

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