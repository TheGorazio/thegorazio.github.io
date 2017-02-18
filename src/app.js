require('./css/main.sass');

Array.from(document.querySelectorAll("input[type=range]")).map((el) => {el.disabled = true});
let hamburgerTrigger = document.querySelector('.trigger'),
    hamburgerMenu = document.querySelector('.menu');
    hamburgerTrigger.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('show');
        hamburgerMenu.classList.toggle('hide');
        if (window.innerWidth < 600) {
            document.querySelector('.header_avatar').classList.toggle('hide');
            document.querySelector('.logo').classList.toggle('hide');
        }
        if (hamburgerMenu.classList.value == 'menu show') {
            hamburgerTrigger.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        } else {
            hamburgerTrigger.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';            
        }
    });
    hamburgerTrigger.addEventListener('mouseover', () => {

    })

