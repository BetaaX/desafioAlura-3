$(document).ready(function() {
    $('#menu').click(function() {
        $('.add').slideToggle();
    });
});

var streamList = ["https://i.pinimg.com/474x/dd/9e/1a/dd9e1a2d819500cb37771ee9d4235678.jpg", "https://i.pinimg.com/736x/9e/3d/b4/9e3db4017b7592072a4542d2583361be.jpg", "https://img.moviesrankings.com/t/p/w1280/pLOWuYnhozZnXMpnCyT0aNfBMGa.jpg", "https://image.tmdb.org/t/p/original/esbfojkHBEyMlIcv2VGW3fCzlzH.jpg", "https://live.staticflickr.com/4145/4844796686_d90fc62b92_b.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ratatouille-movie-poster-1604353249.jpg", "https://www.releasedetails.com/wp-content/uploads/2018/10/585-poster-1.jpg", "https://www.chroniquedisney.fr/imgSerie/phineas1/2007-phineas-ferb-S1-0.jpg", "https://image.tmdb.org/t/p/original/kn6A0SsdmpyIopecfWQoQadcLYB.jpg", "https://assets.mycast.io/posters/brave-live-action-2036-fan-casting-poster-339579-large.jpg"]

var streamListNames = ["Soul: Uma Aventura com Almas", "Homem-Aranha: No AranhaVerso", "Gravity Falls: Um verão de Mistérios", "ZooTopia", "UP: Altas Aventuras", "Ratatouille", "Monstros S.A.", "Phineas e Ferb", "Detona Ralph", "Valente"]

for (let i = 0; i < streamList.length; i++) {
    var images = document.getElementsByClassName('images')[0];

    const content = document.createElement('div')
    images.appendChild(content);

    const img = document.createElement('img');
    img.src = streamList[i];
    content.appendChild(img);
    
    const title = document.createElement('h2');
    title.textContent = streamListNames[i];
    title.classList.add('fontSize');
    content.appendChild(title);
}

var addMovie = document.getElementById('film');

addMovie.addEventListener('click', function () {
    const url = document.getElementById('filmURL').value;

    let extensions = [".jpg", ".jpeg", ".gif", ".png", ".webp", ".heif", ".tiff", ".bmp", ".psd", ".pdf", ".heic", ".raw", ".eps", ".ai", ".indd", ".svg", ".dwg"];

    if (extensions.some(extension => filmURL.value.toLowerCase().endsWith(extension))) {
        const images = document.querySelector('.images')
    
        const content = document.createElement('div');
        images.appendChild(content);

        const img = document.createElement('img');
        img.src = url;
        content.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = document.getElementById('nameFilm').value;
        title.classList.add('fontSize');
        content.appendChild(title);

        filmURL.value = '';
        nameFilm.value = '';
    } else if (url === "") {
        alert('Campo em branco.\nAdicione o filme, por favor.')
    } else {
        alert('Oops! Parece que algo deu errado.\nPor favor, escolha uma imagem válida para o seu filme. 🍿');
        filmURL.value = '';
        nameFilm.value = '';
    }
});