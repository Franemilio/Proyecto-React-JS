import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {

const [textoAvoz, setTextoAvoz] = useState("")
const [VozATexto, setVozATexto] = useState("")







function cambiarTexto(evento) {
  setTextoAvoz(evento.target.value)
}
function convertirTextoAVoz() {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(textoAvoz);
  synth.speak(utterThis);
}
function resultado(event) {
  setVozATexto (event.results[0][0].transcript)
}
  
 
function grabarVozATexto() {  
  const recognition = new Window. webkitSpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.start();
  recognition.onresult = resultado
 
}


  return (
    <>
    <br />
    <h1>Conversor TTS y STT</h1>
   <h3>Converson de texto a voz</h3>
   <input type="text" id="textoAVoz" value={textoAvoz} onChange={cambiarTexto} />
    <button onClick={convertirTextoAVoz}>convertir</button>
    <h3>Conversor de voz a texto</h3>
    <button onClick={grabarVozATexto}>Grabar</button>
    {VozATexto}
    </>
  ) 
  
}
  
  


export default Conversor
