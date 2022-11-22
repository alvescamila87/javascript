let nome = "Camila"

for(i = 0; i < 10; i = i + 1) {
    if(i == 3) {
        nome = "Isabel";
    }

   if(i == 5 && nome == "Isabel") {
        console.log('Nome "Isabel", pode parar');
        break;
}   
    console.log(i);
}



