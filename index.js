const { registrar, leer } = require('./operaciones')
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if(operacion === 'registrar'){
  if(process.argv.length < 8){
    console.log("\nError todos los campos son obligatorios: nombre, edad, animal, color, enfermedad")
    return
  }
    console.log(registrar(nombre, edad, animal, color, enfermedad))
}
if(operacion === 'leer'){
  console.log(leer())
}

