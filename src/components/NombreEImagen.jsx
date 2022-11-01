import React from 'react'

export default function NombreEImagen(props) {
    let { nombre, imagen } = props
  return (
    <>
    <h2 className='titulo white flex j-center a-center'>{nombre}</h2>
    <img src={imagen} alt={nombre} className='photo' />
    </>
  )
}
