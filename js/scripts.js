window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var mybutton = document.getElementById("back-to-top");

 // When the user scrolls down 20px from the top of the document, show the button

    window.onscroll = function () {
    scrollFunction();
};

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";

                }
    }

 // When the user clicks on the button, scroll to the top of the document

    mybutton.addEventListener("click", function () {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
        });

// Pesawat
    function createAirplane() {
        const airplane = document.createElement('img');
        airplane.src = 'assets/img/pesawat.png'; 
        airplane.classList.add('airplane');
        airplane.style.left = `${Math.random() * 90}%`; 
        document.getElementById('pendahuluan').appendChild(airplane);

        setTimeout(() => {
            airplane.style.bottom = '100%'; 
            airplane.style.opacity = '0'; 
        }, 100); 

        setTimeout(() => {
            airplane.remove(); 
        }, 11000); 
    }

    function startAirplanes() {
        setInterval(createAirplane, 5000); 
    }

    window.onload = startAirplanes;

    

