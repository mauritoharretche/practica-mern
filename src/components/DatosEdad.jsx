import React from 'react'

export default function DatosEdad(props) {
    let { estilo1, estilo2, propiedad, valor } = props
  return (
    <p className={`datos white ${estilo1} ${estilo2}`}>{propiedad}: {valor}</p>
  )
}
