// promise com fetch
// encadeamento de promessas, uma dependente da outra

fetch('https://api.github.com/users/maykbrito')
    .then( response => response.json())
    .then( data => data.json())
    .then( res => res.json())
    .then( d => console.log(d))
    .catch (err => console.log(err))