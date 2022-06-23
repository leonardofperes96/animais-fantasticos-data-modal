export default function animacaoScroll(){
const sections = document.querySelectorAll('[data-scroll]');
const windowMetade = window.innerHeight * 0.5;
    const animaScroll = ()=>{
        sections.forEach((section)=>{
        const sectionTop = (section.getBoundingClientRect().top - windowMetade);
        if (sectionTop < 0){
            section.classList.add('ativo');
            
        };
        });


    }

window.addEventListener('scroll', animaScroll);
}