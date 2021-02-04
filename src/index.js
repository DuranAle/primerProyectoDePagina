import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName:'Ale',
  lastName:'Duran'
  //FALTA LA FOTO
}


function getName(user)
{
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user)
{
  if(user)
  {
    return <h1>Hola {getName(user)}</h1>
  }

  return <h1>Hoal Extraño</h1>
}

/**  
 * va abajo del h1
 * 
 * <img src={user.imagen}/> */

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    
  </div>
)

const container = document.getElementById('root')

// ReactDOM.render( Que , Donde)
ReactDOM.render(element,container)