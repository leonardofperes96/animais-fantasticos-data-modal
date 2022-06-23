export default function initMenu(){
const animaisImagem = document.querySelectorAll('[data-imagem] li');
const animaisConteudo = document.querySelectorAll('[data-conteudo] section');
if(animaisImagem.length && animaisConteudo.length){
    animaisConteudo[0].classList.add('ativo');
function activeConteudo(index){
   
    animaisConteudo.forEach((item)=>{
    item.classList.remove('ativo');    
    });
    animaisConteudo[index].classList.add('ativo')
}
animaisImagem.forEach((imagem,index)=>{
    imagem.addEventListener('click', ()=>{
    activeConteudo(index);    

    });

});
}
}







