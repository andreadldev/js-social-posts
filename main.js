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
        "media": "https://unsplash.it/600/400?image=112",
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

for (let i = 0; i < posts.length; i++) {
    const post = document.createElement('div');
    post.classList.add('post');
    document.querySelector('#container').append(post);

    let date = posts[i].created;
    let postDateNumber = 10 - Number(date.substring(6, 7));
    let postDate = `${postDateNumber} mesi fa`
    if (postDateNumber === 1) {
        postDate = `${postDateNumber} mese fa`
    }


    // HEADER
    const postHeader = document.createElement('div');
    post.classList.add('post__header');
    post.append(postHeader);
    postHeader.innerHTML = `
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts[i].author.name}</div>
                <div class="post-meta__time">${postDate}</div>
            </div>                    
        </div>`

    // TESTO
    const postText = document.createElement('div');
    postText.classList.add('post__text');
    post.append(postText);
    postText.innerHTML = `${posts[i].content}`;

    // IMMAGINE
    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    post.append(postImage);
    postImage.innerHTML = `<img src="${posts[i].author.image}" alt="">`;

    // FOOTER
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    post.append(postFooter);
    postFooter.innerHTML = `
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" onclick="event.preventDefault()" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>

            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
            </div>
        </div> `;
}

document.querySelectorAll('.like-button').forEach(link => link.addEventListener('click', () => {
    link.classList.toggle("like-button--liked");
  }));