async function obterCodigo(callback) {
    try {
        const response = await fetch("http://localhost:8000/codigos/",{method: "POST"})
        if (response.ok) callback(await response.text())
        else console.error("Respuesta de error creando nuevo código:", response)
    } catch (excepcion) {
        console.error(excepcion)
    }
}

export {
    obterCodigo
}