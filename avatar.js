
const btn = document.getElementById('btn');
const img = document.querySelector('img');
const name1 = document.getElementById('name');

async function getAvatar() {
    try {
        btn.disabled = true;
        btn.innerText = "Loading...";
        const urlApi = 'https://picsum.photos/1500/800';
        const res = await fetch(urlApi);
        img.src = res.url;
        btn.disabled = false;
        btn.innerText = "Next Picture";
    } catch (error) {
        name1.innerText = error.message;
        name1.style.color = 'red';
    }
}
btn.addEventListener('click', getAvatar);
