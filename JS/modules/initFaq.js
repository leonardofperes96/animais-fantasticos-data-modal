export default function initFaq(){
const animaisQuestions = document.querySelectorAll('[data-faq] dt');
const animaisAnswers = document.querySelectorAll('[data-faq] dd');

function activeFaq(index){
    animaisAnswers[index].classList.toggle('ativo');
};
animaisQuestions.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
    activeFaq(index);
    });

});
}