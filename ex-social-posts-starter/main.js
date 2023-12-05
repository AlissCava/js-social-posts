const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=113",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.

// Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.

// Quando la pagina è completamente caricata
document.addEventListener('DOMContentLoaded', function () {
    // Ottieni il contenitore dei post dal DOM
    const container = document.getElementById('container');

    // Itera attraverso ogni oggetto nel tuo array di post utilizzando un ciclo for
    for (let i = 0; i < posts.length; i++) {
        // Ottieni il post corrente
        const post = posts[i];

        // Crea un elemento post e aggiungilo al contenitore
        const postElement = createPostElement(post);
        container.append(postElement);
    }
});

// Funzione per creare dinamicamente un elemento post
function createPostElement(post) {
    // Creazione di un nuovo elemento <div> per rappresentare un post
    const postElement = document.createElement('div');
    // Aggiunta della classe 'post' al nuovo elemento
    postElement.classList.add('post');

    // Intestazione del post (autore e data)
    const header = document.createElement('div');
    // Aggiunta della classe 'post__header' all'intestazione
    header.classList.add('post__header');
    // Creazione dell'HTML per l'intestazione del post
    header.innerHTML = `
        <div class="post-meta">
            <!-- Icona del profilo dell'autore -->
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
            </div>
            <!-- Informazioni sull'autore (nome e data) -->
            <div class="post-meta__data">
                <!-- Nome dell'autore -->
                <div class="post-meta__author">${post.author.name}</div>
                <!-- Data del post -->
                <div class="post-meta__time">
                    <p> 4 mesi fa </p> 
                </div>
            </div>
        </div>
    `;
    // Aggiunta dell'intestazione al post
    postElement.append(header);

    // Contenuto del post (testo e, opzionalmente, immagine)
    const text = document.createElement('div');
    // Aggiunta della classe 'post__text' al contenuto del testo
    text.classList.add('post__text');
    // Testo del post
    text.textContent = post.content;
    // Aggiunta del testo al post
    postElement.append(text);

    // Aggiunta dell'immagine del post (se presente)
    if (post.media) {
        const image = document.createElement('div');
        // Aggiunta della classe 'post__image' all'elemento immagine
        image.classList.add('post__image');
        // Immagine del post
        image.innerHTML = `<img src="${post.media}" alt="">`;
        // Aggiunta dell'immagine al post
        postElement.append(image);
    }

    // Footer del post (mi piace e contatore dei likes)
    const footer = document.createElement('div');
    // Aggiunta della classe 'post__footer' al piè di pagina
    footer.classList.add('post__footer');
    // Creazione dell'HTML per il piè di pagina del post
    footer.innerHTML = `
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                    <!-- Icona del pollice in su -->
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <!-- Etichetta "Mi Piace" -->
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <!-- Contatore dei Mi Piace -->
            <div class="likes__counter">
                Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div>
    `;
    // Aggiunta del piè di pagina al post
    postElement.append(footer);

    // Restituzione dell'elemento post completo
    return postElement;
}

