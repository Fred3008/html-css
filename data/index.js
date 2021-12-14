const array = ['Paris', 'Lyon', 'Monreal', 'Bordeaux']
const array1 = ['Paris', 'Lyon', 69, ['Bordeaux'], true]
    //console.log(array[0][4]);
for (i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
// revoie les element trier
array.sort()
    //console.log(array);

const input = document.getElementById('input')
const video = document.getElementById('video')
let link = ""

input.addEventListener('input', (e) => {
    changeLink(e.target.value);
    if (link) {
        video.innerHTML = `<iframe width="1311" height="818" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
});
const changeLink = (linkTochange) => {
    let embed = linkTochange.replace('watch?v=, "embed/')
    link = embed.split('&')[0];
}