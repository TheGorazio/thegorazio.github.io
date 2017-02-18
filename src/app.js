require('./css/main.sass');

Array.from(document.querySelectorAll("input[type=range]")).map((el) => {el.disabled = true});

let hamburgerTrigger = document.querySelector('.trigger'),
    hamburgerMenu = document.querySelector('.menu');
/* vue app */

import { Russian } from './russian.js';
import { English } from './english.js';

const app = new Vue({
    el: '#app',
    data: {
        language: 'English',
        content: English,
        menuOn: false,
        isPhone: window.innerWidth < 600
    },
    methods: {
        changeLanguageToEnglish() {
            if (this.language !== 'English') {
                this.language = 'English';
                this.content = English;
            }            
        },
        changeLanguageToRussian() {
            if (this.language !== 'Russian') {
                this.language = 'Russian';
                this.content = Russian;
            }            
        },
        showMenu() {
            this.menuOn = !this.menuOn;
            if (this.isPhone) {
                document.querySelector('.header_avatar').classList.toggle('hide');
                document.querySelector('.logo').classList.toggle('hide');
            }
        },
        resize() {
            this.isPhone = window.innerWidth < 600
        }
    }
})

