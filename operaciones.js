const fs = require('fs')
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  }
  if (fs.existsSync('citas.json')) {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    citas.push(nuevaCita)
    fs.writeFileSync('citas.json', JSON.stringify(citas))
  } else {
    fs.writeFileSync('citas.json', JSON.stringify([nuevaCita]))
  }
  return ("\nSe registro la nueva cita")
}
const leer = () => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
  let mensaje = ""
  citas.forEach(e => {
    mensaje += `
      \nNombre: ${e.nombre} 
      \nEdad: ${e.edad} 
      \nAnimal: ${e.animal} 
      \nColor: ${e.color} 
      \nEnfermedad: ${e.enfermedad}
      \n==================================
    `
  })
  if (mensaje === "") {
    return ("\nNo hay citas registradas")
  } else {
    return mensaje
  }
}
module.exports = { registrar, leer }