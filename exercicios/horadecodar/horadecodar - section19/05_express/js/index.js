let express = require('express');
let app = express();

// rota
app.get('/', function(req, res) {
    res.send('Primeira rota com Express');
});

// rota 2
app.get('/teste', function(req, res) {
    res.send('Testando rota 2');
});


// servidor (usuário só pode acessar nossa aplicação por essa porta)
app.listen(3000, function() {
    console.log("A aplicação está funcionando na porta 3000");
});