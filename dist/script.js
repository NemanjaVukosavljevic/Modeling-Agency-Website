let hamburger = document.querySelector('#hamburger')
let navlinks = document.querySelector('#navlinks')

let line = hamburger.querySelector('#line')
let line2 = hamburger.querySelector('#line2')

// NAVBAR CONSTS

const contactButton = document.getElementById('contactButton');
const shoppingCartButton = document.querySelectorAll('.shopping-cart');

hamburger.addEventListener('click', function (){
    if (navlinks.classList.contains('hidden')){
        navlinks.classList.remove('hidden')
        line.classList.add('rotate-45', 'absolute')
        line2.classList.add('-rotate-45', 'absolute')
        line2.classList.remove('mt-1.5')
    } else{
        navlinks.classList.add('hidden')
        line.classList.remove('rotate-45', 'absolute')
        line2.classList.remove('-rotate-45', 'absolute')
        line2.classList.add('mt-1.5')
    }
})

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const isClickInsideNavlinks = navlinks.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);

    if (!isClickInsideNavlinks && !isClickInsideHamburger) {
        navlinks.classList.add('hidden');
        line.classList.remove('rotate-45', 'absolute');
        line2.classList.remove('-rotate-45', 'absolute');
        line2.classList.add('mt-1.5');
    }
});


// FORM


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Extract values from form inputs
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const instagramValue = document.getElementById('instagram').value;
    const messageValue = document.getElementById('message').value;

    // Make the fetch request
    fetch('http://127.0.0.1:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            instagram: instagramValue,
            message: messageValue,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Email sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error sending email!');
        });
});






