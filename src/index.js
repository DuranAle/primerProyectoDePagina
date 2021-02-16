import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Welcome from './components/Welcome'




const container = document.getElementById('root')

// ReactDOM.render( Que , Donde)
ReactDOM.render(<div>
                <Welcome
                     username="Ale"
                />
               <Card 
                   title="Titulo"
                   description="Learn amazing street workout and calisthenics"
                   img='./imagenes/exercise'// NO FUNCIONA
                   leftColor="#A74CF2"
                   rightColor="#617BFB" 
                />

               </div>,container)