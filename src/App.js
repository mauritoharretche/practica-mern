import './index.css'
import Boton from './components/Boton'
import data from './data/perfiles'
import { useState } from 'react'
import Datos from './components/Datos'
import DatosEdad from './components/DatosEdad'
import NombreEImagen from './components/NombreEImagen'

function App() {
  let [numero, numeroACambiar] = useState(0)
  let [ocultar, ocultarACambiar] = useState(false)

  let anterior = () => {
    if (numero !== 0) {
      numeroACambiar(--numero)
    }else{
      numeroACambiar(data.length - 1)
    }
  }
  let siguiente = () => {
    if (numero !== data.length - 1) {
      numeroACambiar(++numero)
    }else{
      numeroACambiar(0)
    }
  }

  let ocultarDatos = () => {
    ocultarACambiar(!ocultar)
  }

  return (
    <div className='card black'>
      <NombreEImagen nombre={data[numero].nombre} imagen={data[numero].foto} />
      { ocultar ? (<> <p className='gray flex j-center a-center' onClick={ocultarDatos}>ocultar info</p>
      <div className='edad-fecha'>
        <DatosEdad estilo1='r25' estilo2='edad' propiedad='Edad' valor={data[numero].edad} />
        <DatosEdad estilo1='l25' estilo2='fecha' propiedad='Fecha' valor={data[numero].nacimiento} />
      </div>
      <Datos propiedad='Mail' valor={data[numero].mail}/>
      <Datos propiedad='Comidas' valor={data[numero].comidas.join(' y ')}/>
      <Datos propiedad='Hobbies' valor={data[numero].hobbies.join(' y ')}/>
      </> )
      : (<p className='gray flex j-center a-center' onClick={ocultarDatos}>mostrar info</p>)
      }
      <div className='flex j-center a-center'>
        <Boton verbo="anterior" estilo="r25" funcion={anterior}/>
        <Boton verbo="siguiente" estilo="l25" funcion={siguiente} />
      </div>
    </div>
  )
}

export default App