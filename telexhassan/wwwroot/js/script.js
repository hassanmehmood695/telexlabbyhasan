

// Typed.js animation
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: ["The Best Deals", "The Latest Tech"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };
    const typed = new Typed("#changing-text", options);
});

// Button click alerts
document.querySelector('.buttonsuper').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert(`${event.target.innerText} button clicked!`);
    }
});

// Add to cart functionality
document.querySelectorAll('.addtocart button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.descbox').querySelector('.two h1').innerText;
        alert(`${productName} added to cart!`);
    });
});

// Menu toggle for mobile view
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('visible');
});

// Fetch data with AJAX
function fetchData() {
    fetch('https://api.example.com/products')  // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}
fetchData();

// Responsive font size adjustment
function resizeHandler() {
    const textElement = document.getElementById('changing-text');
    if (window.innerWidth < 600) {
        textElement.style.fontSize = '12px';
    } else {
        textElement.style.fontSize = '24px';
    }
}
window.addEventListener('resize', resizeHandler);
resizeHandler();

// Local storage example
function saveUserData() {
    localStorage.setItem('username', 'JohnDoe');
}

function loadUserData() {
    const username = localStorage.getItem('username');
    if (username) {
        console.log(`Welcome back, ${username}`);
    } else {
        console.log('No user data found');
    }
}

saveUserData();
loadUserData();

// Animate logo
function animateLogo() {
    const logo = document.querySelector('.logo h1');
    let position = 0;
    const interval = setInterval(function() {
        if (position >= 50) {
            clearInterval(interval);
        } else {
            position++;
            logo.style.transform = `translateY(${position}px)`;
        }
    }, 10);
}
animateLogo();

// Form validation
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    if (!email || !message) {
        alert('All fields are required!');
        event.preventDefault();
    }
});

// Dynamic content update
function updateProductContent() {
    const productName = document.querySelector('.product-name');
    const productPrice = document.querySelector('.product-price');
    productName.innerText = 'New Product Name';
    productPrice.innerText = '$20.00';
}
updateProductContent();
