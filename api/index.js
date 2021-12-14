const quote = document.getElementsByClassName('quote')
fetch('https://api.quotable.io/random')
    .then((Res) => Res.json())
    .then(data => {
        console.log(`${data.content}-${data.author}`);
    })