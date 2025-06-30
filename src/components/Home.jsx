import React from 'react'
import Nav from './Nav'
import image from '../img/1.png'
import image2 from '../img/2.png'
import image3 from '../img/3.png'
import image4 from '../img/4.png'
import image5 from '../img/5.png'
import image6 from '../img/6.png'
import image7 from '../img/7.png'
import image8 from '../img/8.png'
import image9 from '../img/9.png'
import image10 from '../img/10.png'
import image11 from '../img/11.png'
import image12 from '../img/12.png'
import Card from './Card'

export default function Home(){
  return (
    <div>
        <Nav />
        <section className="section-cards">
            <Card image={image} cantante={"Ericson Alexander Molano"} titulo={"Mi Pasión"} />
            <Card image={image2} cantante={"Música Crsitiana Instrumental"} titulo={"Alabanzas de Adoración"}/>
            <Card image={image3} cantante={"Los Voceros de Cristo"} titulo={"Música Cristiana desde Casa"}/>
            <Card image={image4} cantante={"Juan Carlos Alvarado"} titulo={"Aviva el Fuego"}/>
            <Card image={image5} cantante={"Marcos Witt"} titulo={"Dios de Pactos"}/>
            <Card image={image6} cantante={"Inspiración"} titulo={"Alabemos"}/>
            <Card image={image7} cantante={"Jesús Adrian Romero"} titulo={"A sus pies"}/>
            <Card image={image8} cantante={"Marcos Vidal"} titulo={"Alabanza y Adoración en vivo"}/>
            <Card image={image9} cantante={"Marcos Witt"} titulo={"Sigues siendo Dios"}/>
            <Card image={image10} cantante={"Roberto Orellana"} titulo={"Mi vida esta llena de tí"}/>
            <Card image={image11} cantante={"Rabito"} titulo={"Sinceridad"}/>
            <Card image={image12} cantante={"Marcos Vidal"} titulo={"Mi Regalo"}/>
        </section>
        <footer className="footer">
            <p>© 2025 Spotify Clone. All rights reserved - Samuel Azucena</p>
        </footer>
    </div>
  )
}
