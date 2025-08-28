// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Initialize the website
    init();
});

// Main initialization function
function init() {
    // Add any initialization code here
    setupEventListeners();
    
    // Example: Add a simple interaction
    addWelcomeMessage();
}

// Setup event listeners
function setupEventListeners() {
    // Example: Add click event to header
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', function() {
            console.log('Header clicked!');
            // Add your custom functionality here
        });
    }
    
    // Example: Add scroll event for sticky header effects
    window.addEventListener('scroll', handleScroll);
}

// Handle scroll events
function handleScroll() {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');
    
    if (scrollY > 100) {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}

// Example function to add welcome message
function addWelcomeMessage() {
    // This is just an example - you can customize this
    const currentHour = new Date().getHours();
    let greeting;
    
    if (currentHour < 12) {
        greeting = 'Good morning!';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }
    
    // You can uncomment the line below to show the greeting
    // console.log(greeting + ' Welcome to the website.');
}

// Utility functions
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Helper function to add classes
function addClass(element, className) {
    if (element && className) {
        element.classList.add(className);
    }
}

// Helper function to remove classes
function removeClass(element, className) {
    if (element && className) {
        element.classList.remove(className);
    }
}

// Helper function to toggle classes
function toggleClass(element, className) {
    if (element && className) {
        element.classList.toggle(className);
    }
}

// Example: Simple fade in animation function
function fadeIn(element, duration = 1000) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.min(progress / duration, 1);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Example: Simple fade out animation function
function fadeOut(element, duration = 1000) {
    if (!element) return;
    
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.max(1 - (progress / duration), 0);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    }
    
    requestAnimationFrame(animate);
}
