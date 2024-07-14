document.getElementById('login-btn').addEventListener('click', () => {
    window.location.href = 'login.html';
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        loadPosts();
    }
});

function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    db.collection('posts').get().then(snapshot => {
        snapshot.forEach(doc => {
            const post = doc.data();
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h3>${post.username}</h3><p>${post.text}</p>`;
            postsContainer.appendChild(postElement);
        });
    });
}
