import React from 'react'

export default function Boton(props) {
    let { verbo, estilo , funcion} = props

  return (
    <div className={`gray flecha ${ estilo }  flex j-center a-center`} onClick={funcion}> {verbo} </div>
  )
}
