var button = document.getElementById('read_button');
var button2 = document.getElementById('read_button2');
var button3 = document.getElementById('read_button3');

button.addEventListener('click', function() {
    var card = document.querySelector('.card1');
    card.classList.toggle('active1');

    if (card.classList.contains('active1')) {
        return button.textContent = 'Ver menos';
    }
    button.textContent = 'Ver mais';
});
button2.addEventListener('click', function() {
    var card2 = document.querySelector('.card2');
    card2.classList.toggle('active2');

    if (card2.classList.contains('active2')) {
        return button2.textContent = 'Ver menos';
    }
    button2.textContent = 'Ver mais';
});
button3.addEventListener('click', function() {
    var card3 = document.querySelector('.card3');
    card3.classList.toggle('active3');

    if (card3.classList.contains('active3')) {
        return button3.textContent = 'Ver menos';
    }
    button3.textContent = 'Ver mais';
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');

// Verificar se o elemento existe antes de adicionar o evento
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const value = formatString(event.target.value);
            const items = document.querySelectorAll('.items .item');
            const noResults = document.getElementById('no_results');

            let hasResults = false;

            if(value != '') {
                items.forEach(item => {
                    // Certifique-se de que o item tem o valor esperado
                    if (formatString(item.textContent).indexOf(value) !== -1) {
                        document.querySelector('.items').style.display = 'flex';
                        item.style.display = 'flex';
    
                        hasResults = true;
                    } else {
                        item.style.display = 'none';
                    }
                });
    
                if (hasResults) {
                    noResults.style.display = 'none';
                } else {
                    noResults.style.display = 'block';
                }
            } else {
                items.forEach(item => item.style.display = 'none');
                document.querySelector('.items').style.display = 'none';

                noResults.style.display = 'none';
            }
            
        });
    }
})

function formatString(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "assets/img/menu.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/close.svg"
    }
}