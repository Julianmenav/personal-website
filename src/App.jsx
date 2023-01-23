import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <div id="movieBackground">
    <video preload autoplay muted loop id="vid">
      <source src="/video.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
  <header id="navBar">
    <div>
      <div>MENU 1</div>
      <div>MENU 2</div>
      <div>MENU 3</div>
    </div>
    <div>
      <div>Registro</div>
      <div>Login</div>
    </div>
  </header>
  <div id="frontPage">
    <div id="textBox">
      <p id="title">Practica 3</p>
      <p>Insertar vídeo de fondo</p>
      <button>Entrar</button>
    </div>
  </div>
  <div id="content">
    <p class="contentTitle">Cuerpo página</p>
    <p class="sampleText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
    </div>
  )
}

export default App
