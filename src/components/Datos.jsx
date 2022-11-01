import React from 'react'

export default function Datos(props) {
    let { propiedad, valor } = props
  return (
    <div className='datos white flex a-center'>
        <p>{propiedad}: {valor}</p>
    </div>
  )
}
