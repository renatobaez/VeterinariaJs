const fs = require('fs')
const registrar = (nombre, edad, animal, color, enfermedad) => {
  if(nombre != undefined && edad != undefined && animal != undefined && color != undefined && enfermedad != undefined) {
    const nuevaCita = {
      nombre: nombre,
      edad: edad,
      animal: animal,
      color: color,
      enfermedad: enfermedad
    }
    if(fs.existsSync('citas.json')) {
      const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
      citas.push(nuevaCita)
      fs.writeFileSync('citas.json', JSON.stringify(citas))
    }
    else{
      fs.writeFileSync('citas.json', JSON.stringify([nuevaCita]))
    }
    return("\n Se registro la nueva cita")
  } else {
    return("\n Error todos los campos son obligatorios: nombre, edad, animal, color, enfermedad")
  }
}
const leer = () => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
  return(citas)
}
module.exports = {registrar, leer}