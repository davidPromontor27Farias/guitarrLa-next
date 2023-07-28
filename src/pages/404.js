import Link from 'next/link';
const errorPagina = () => {


  return (
    <div className="contenedor errorPage">
        <div className="centrarError">
            <h1>Oooopss, Lo sentimos. No encontramos informacion con esta direccion.</h1>
            <Link className="regresar" href="/">Regresar</Link>        
        </div>

    </div>
  )
}

export default errorPagina
