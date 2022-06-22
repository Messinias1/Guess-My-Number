'use strict';
// http://127.0.0.1:5500/index.html

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 1;

document.querySelector('.guess').value = 13;
