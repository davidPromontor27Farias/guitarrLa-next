import {useState, useEffect} from 'react';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [];
  const [carrito, setCarrito] = useState(carritoLS);
  const [listo, setListo] = useState(false);

  useEffect(()=> {

    setListo(true);

  }, []);


  useEffect(()=>{

    window.localStorage.setItem('carrito', JSON.stringify(carrito));

  }, [carrito]);

  const agregarCarrito = (guitarra) => {

    if(carrito.some( producto => producto.id === guitarra.id)){

      const carritoActualizado = carrito.map( productoState => {
        if(productoState.id === guitarra.id){
          productoState.cantidad = Number(guitarra.cantidad);
        }

        return productoState;
      });

      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    else{
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }


  }

  const eliminarProducto = id => {
    
    const eliminado = carrito.filter(producto => producto.id !== id);
    setCarrito(eliminado);
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = guitarra =>{
    const cantidadActualizada = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id){
          guitarraState.cantidad = Number(guitarra.cantidad);
        } 

        return guitarraState;
    })

    setCarrito(cantidadActualizada);
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }



  return listo  ?  <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
   />
   : null

}
