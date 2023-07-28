import styles from '../src/styles/curso.module.css';

const Curso = ({curso}) => {
    const {nombreCurso, descripcion, imagen} =  curso;
    
    return (
        <div className={`${styles.contenedorCurso} curso-contain`}>
            
            <style jsx>{
                `
                    .curso-contain{

                        background-image: linear-gradient( to right, rgb( 0 0 0 / .65) , rgb(0 0 0 / .7)), url(${imagen.data[0].attributes.formats.medium.url})
                    }
                    
                `
            }
            </style>

            <div className={styles.contenedorDescripcion}>

                <div className={styles.contenedorGrid}>
                    <h2 className={styles.tituloCurso}>{nombreCurso}</h2>
                    <p className={styles.descripcion}>{descripcion}</p>
                </div>
            </div>
        </div>
  )
}

export default Curso
