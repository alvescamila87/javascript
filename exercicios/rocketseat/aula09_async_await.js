// async / await
// maneira de escrever promises
// syntatic sugar

const promessa = new Promise( function (resolve, reject) {
 
  return resolve ('ok')

})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('sempre rodar')
  }
}

start()

// promessa 
//   .then(function(reponse) {
//     console.log(reponse)
//   })
//   .catch(function(error) {
//     console.log(error)
//   })
//   .finally(function() {
//     console.log('sempre irei executar')
//   })
