const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const seconEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const date = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 24
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate()`
}

setTime()