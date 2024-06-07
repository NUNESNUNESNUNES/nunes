document.addEventListener('DOMContentLoaded', function () {
    // Adicionar evento de clique ao header
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        alert('Você clicou no header!');
    });

    // Adicionar evento de mouseover às imagens
    const images = document.querySelectorAll('.photos img');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', function () {
            image.style.transform = 'scale(1)';
        });
    });

    // Adicionar conteúdo dinamicamente ao clicar em um botão
    const button = document.getElementById('add-content-button');
    const footer = document.querySelector('footer');

    button.addEventListener('click', function () {
        const newText = document.createElement('p');
        newText.textContent = 'PEDIDO SOLICITADO!';
        footer.appendChild(newText);
    });
});
