import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'




const container = document.getElementById('root')

// ReactDOM.render( Que , Donde)
ReactDOM.render(<Card 
                   title="Titulo"
                   description="Learn amazing street workout and calisthenics"
                   img='./imagenes/exercise'// NO FUNCIONA
                   leftColor="#A74CF2"
                   rightColor="#617BFB" 
                />,container)