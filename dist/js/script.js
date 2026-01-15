//hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const totop = this.document.querySelector('#to-top')

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        totop.classList.remove('flex');
        totop.classList.add('hidden');
    }
}

//klik di luar hamburger
window.addEventListener('click', function(e){
    if (e.target != hamburger && e.target != navmenu) {
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
});

//darkmode toggle
const darktoggle =  document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function(){
    if (darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindahkan posisi toggle sesuai mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark )').matches)) {
             document.documentElement.classList.add('dark')
             darktoggle.checked = true;
        }else{
            darktoggle.checked = false;
    }