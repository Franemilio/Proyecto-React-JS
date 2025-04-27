import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './conversor'

function App() {
const [usuario, setUsuario] = useState("")
const [contraseña, setContraseña] = useState("")

const [logueado, setLogueado] = useState(false)




function cambiarUsuario (evento) {
  setUsuario(evento.target.value)
  
}
function cambiarContraseña(evento) {
  setContraseña(evento.target.value)
}
function iniciarsesion() {
  alert("iniciando sesion...")
  if (usuario === "admin" && contraseña === "admin") {
    alert("Ingresaste")
    setLogueado(true)
  } else {
    alert("usuario o contraseña incorrectos")
  }
  
}

  
 

if (logueado) {
 return <Conversor />
  
}
  
  return (
    <>
    <h1>Inicio sesion</h1>
     <input placeholder="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
     <input placeholder="contraseña" id="contraseña" value={contraseña} onChange={cambiarContraseña} />
     <button onClick={iniciarsesion}>iniciar sesion</button>
   
     
     
     
    </>
  )
}

export default App
