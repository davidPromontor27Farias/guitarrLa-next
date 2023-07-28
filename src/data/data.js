

export async function consumirAPI(){

    const url = "http://localhost:1337/api/guitarras?populate=imagenes";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
}