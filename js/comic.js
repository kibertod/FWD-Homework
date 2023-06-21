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

    let comicImg = document.querySelector("#comic");
    let nameSpan = document.querySelector("#name");
    let dateSpan = document.querySelector("#date");

    comicImg.src = data.img;
    comicImg.alt = data.alt;
    nameSpan.textContent = data.safe_title;

    let date = new Date(Date.UTC(data.year, data.month, data.day));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateSpan.textContent = date.toLocaleDateString(undefined, options);
}

document.querySelector("#trigger").addEventListener("click", updateComic);

document.addEventListener('DOMContentLoaded', updateComic);