
// ················  NAV  ··················
const abrir_nav =
document.querySelector('#abrir_nav')
const cerrar_nav = document.querySelector('#cerrar_nav')
const nav = document.querySelector('#nav')

abrir_nav.addEventListener('click',()=>{
    nav.classList.add('visible')
    btn_home.classList.replace('btn_home','home_white')
    btn_darkmode.classList.replace('btn_darkmode','sun_white');
})
cerrar_nav.addEventListener('click',()=>{
    nav.classList.remove('visible')
})
// ···········································

// ··················· DARKMODE ············
const btn_darkmode= document.querySelector('.btn_darkmode');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const btn_home = document.querySelector('.btn_home');

btn_darkmode.addEventListener('click', ()=>{
    body.classList.toggle('darkmode');
    console.log('que pasa')
    btn_darkmode.classList.toggle('sun_white');
    if(body.classList.contains('darkmode')){
        header.style.borderBottom = '1px solid #f9f9f9';
        btn_home.classList.replace('btn_home','home_white');
    }
    else{
        header.style.borderBottom ='1px solid #201e1f';
    }
});