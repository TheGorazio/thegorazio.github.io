require('./css/main.sass');

Array.from(document.querySelectorAll("input[type=range]")).map((el) => {el.disabled = true});