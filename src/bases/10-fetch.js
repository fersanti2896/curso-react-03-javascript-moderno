/* Fetch API */
const apiKey = 'o1oBT0uzPdpH7pcJqtl8hBtCNqDcIrOX';
const giphyRUL = 'https://api.giphy.com/v1/gifs/random'
const peticion = fetch(`${giphyRUL}?api_key=${apiKey}`)

/* Encadenamiento de promesas */
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img')
        img.src = url

        document.body.append(img);
    })
    .catch(console.warn);