


export default function initScroll()
{

const linksInternos = document.querySelectorAll('a[href^="#"]');
function activeLink(e){
    e.preventDefault();
    const html = e.currentTarget.getAttribute('href');
    const section = document.querySelector(html);
    section.scrollIntoView({
    behavior: 'smooth',//scroll mais tranquilo
    block: 'start', //alinhe o bloco ao inicio

});
}; 
linksInternos.forEach(function (link){
link.addEventListener('click', function(e){
activeLink(e);
});
});
}