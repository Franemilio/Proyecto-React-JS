import { useState } from 'react'

function Conversor() {
  const [textoAvoz, setTextoAvoz] = useState("")
  const [vozATexto, setVozATexto] = useState("")

  function cambiarTexto(evento) {
    setTextoAvoz(evento.target.value)
  }

  function convertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAvoz)
    synth.speak(utterThis)
  }

  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition() // <-- corrección
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado
  }

  return (
    <>
      <br />
      <h1>Conversor TTS y STT</h1>

      <h3>Conversión de texto a voz</h3>
      <input
        type="text"
        id="textoAVoz"
        value={textoAvoz}
        onChange={cambiarTexto}
        placeholder="Escribe algo para decirlo"
      />
      <button onClick={convertirTextoAVoz}>Convertir</button>

      <h3>Conversión de voz a texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      <p><strong>Texto reconocido:</strong> {vozATexto}</p>
    </>
  )
}

export default Conversor

