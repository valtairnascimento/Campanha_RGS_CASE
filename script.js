const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-menu a');
const emailElement = document.querySelector('.key-pix');
const shareButtons = document.querySelectorAll('.share-button');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
    document.body.classList.toggle('no-scroll');
});

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        const targetId = link.getAttribute('data-target'); 
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'   
            });

            if (menu.classList.contains('ativo')) {
                menu.classList.remove('ativo');
                navMenu.classList.remove('ativo');
                document.body.classList.remove('no-scroll');
            }
        }
    });
});

emailElement.addEventListener('click', () => {
    window.location.href = 'mailto:DOACAO@SISTEMAFIEP.ORG.BR';
});

shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://www.instagram.com', '_blank'); 
    });
});
