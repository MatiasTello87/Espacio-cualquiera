


// ···········  CONTAINER AUTOR  ··················


// botón reseña
const btn_autor = document.querySelector('#btn_autor')
const reseña = document.querySelector('#reseña_hiden')

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
// ·····················································







// ················ SLIDER ARTICLE  ·················

