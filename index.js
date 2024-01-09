const { registrar, leer } = require('./operaciones')
const operacion = process.argv[2]
if(operacion === 'registrar'){
  console.log(registrar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]))
}
if(operacion === 'leer'){
  const citas = leer()
  citas.forEach(e => {
    console.log(e)
  })
}

