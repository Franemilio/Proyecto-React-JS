import { useEffect, useState } from 'react'
import './App.css'
import Conversor from './conversor'

function App() {
  const [usuario, setUsuario] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarContraseña(evento) {
    setContraseña(evento.target.value)
  }

  async function iniciarsesion() {

    const response = await fetch('http://localhost:3000/login?usuario=' + usuario + '&contraseña=' + contraseña, {
      credentials: 'include',
    })

    if (response.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o clave incorrecta')
    }
  }

  async function validar() {
    const response = await fetch('http://localhost:3000/validar', {
      credentials: 'include',
    })


    if (response.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o clave incorrecta')
    }

  }
  useEffect(()=>{
    validar()
  },[])


  if (logueado) {
    return <Conversor />
  }

  return (
    <>
      <h1>Inicio sesión</h1>
      <input placeholder='usuario' type="text" value={usuario} onChange={cambiarUsuario} />
      <input placeholder="contraseña" type="password" value={contraseña} onChange={cambiarContraseña} />
      <button onClick={iniciarsesion}>Iniciar sesión</button>
    </>
  )
}

export default App

