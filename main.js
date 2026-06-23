document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    fetch('https://api.github.com/users/Felipe-fcarvalho')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = '@' + json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function (erro) {
            console.log('Erro na requisição:', erro);
        });
})