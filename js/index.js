


// ···········  CONTAINER AUTOR  ··················


// botón reseña
const btn_autor = document.querySelector('#btn_autor')
const reseña = document.querySelector('#reseña_hiden')
const intro = document.querySelector('#intro')
let intromoved = false;
const footer = document.querySelector('#footer')

// evento de botón info del autor
btn_autor.addEventListener('click',()=>{
    reseña.classList.toggle('reseña')
    if(reseña.classList.contains('reseña')){
        btn_autor.textContent = '-'
    }
    else{
        btn_autor.textContent = '+' 
    }
})
function tamaño_Cel (){
    console.log(window.innerWidth);
    return window.innerWidth <= 600;
}
if(tamaño_Cel()){
    btn_autor.addEventListener('click',()=>{
        if(intromoved){
            intro.style.top = "0";
            intromoved = false;
            footer.style.top = '0';

        }else{
            intro.style.top = "450px";
            intromoved = true;
            footer.style.top = '450px';
        }
        
        intro.style.position = "relative";
    });
}
// ·····················································








// ················ SLIDER ARTICLE  ·················

