import { obterCodigo } from "./api.mjs";

test("obtenerCodigo",()=>{

    function callbackDeTest(datos){
        expect(typeOf(datos)).toBe("string")
        expect(datos.length).toEqual(12)
    }

    obterCodigo(callbackDeTest)

})