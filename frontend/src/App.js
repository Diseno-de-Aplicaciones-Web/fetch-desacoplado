import { useEffect, useState } from "react"
import { obterCodigo } from "./lib/api.mjs"

function App() {

  const [ codigo, setCodigo ] = useState("...")

  function actualizarCodigo() {
    obterCodigo(setCodigo)
  }

  useEffect(
    ()=>{
      obterCodigo(setCodigo)
    },
    []
  )

  return (
    <main>
      <h1>Obter un código</h1>
      <p>{codigo}</p>
      <button onClick={actualizarCodigo}>Obtener</button>
    </main>
  );
}

export default App;
