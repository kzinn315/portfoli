document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo de como você poderia adicionar mais funcionalidades, como um carrossel de depoimentos
    // (Para um carrossel real, você precisaria de uma biblioteca ou mais código JS)
    const depoimentosContainer = document.querySelector('.depoimentos-carousel');
    if (depoimentosContainer) {
        // Implementar lógica de carrossel aqui, se desejar
        // Por enquanto, ele usa overflow-x para rolagem manual
        console.log("Depoimentos carregados. Considere adicionar lógica de carrossel.");
    }

    // Exemplo de validação de formulário (muito básica)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                alert(`Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`);
                this.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});