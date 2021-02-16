import React from 'react'

//import exerciseImg from '../imagenes/exercise.png'

import circlesImg from '../imagenes/circles.png'
import './styles/Card.css'


class Card extends React.Component
{
    render()
    {
        const{title,description,img,leftColor,rightColor}= this.props

        return  (   

            
               /*  <div class="">*/


            <div className ="CardEst  column is-half is-offset-one-quarter Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div >
                    <div className="media">
                        <div className ="media-right">
                            /**  no toma la imagen */
                            <img src={img} />
                        </div> 
                        <div className ="column is-6 Fitness-Card-Info " >
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
                    



        )

               

               
            
            
        
        
            
        
    }
}

export default Card

 