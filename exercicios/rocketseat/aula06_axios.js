// axios

import axios from 'axios'

axios

fetch('https://api.github.com/users/maykbrito')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(error => console.log(error))