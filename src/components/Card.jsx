import React from 'react'
import image from '../img/1.png'

export default function Card({image, cantante, titulo}) {
  return (
    <div className="card">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <strong>{titulo}</strong>
            <p className="card-text">{cantante}</p>
        </div>
    </div>
  )
}
