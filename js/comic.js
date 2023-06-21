async function getId(email) {
    return await fetch("https://fwd.innopolis.university/api/hw2?email=" + email)
    .then(result => result.text())
}

async function getImage(id) {
    return await fetch("https://fwd.innopolis.university/api/comic?id=" + id)
    .then(result => result.json())
    .then(data => data)
}

async function updateComic() {
    let email = document.querySelector("#email").value;
    let id = await getId(email);
    let data = await getImage(id);

    let comic = document.querySelector("#comic");
    let name = document.querySelector("#name");
    let date = document.querySelector("#date");

    comic.src = data.img;
    comic.alt = data.alt;
    name.textContent = data.safe_title;
    date.textContent = `${data.day}.${data.month}.${data.year}`;
}

document.querySelector("#trigger").addEventListener("click", updateComic);

document.addEventListener('DOMContentLoaded', updateComic);