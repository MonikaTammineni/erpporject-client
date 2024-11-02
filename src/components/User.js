import React from 'react'

const User =  (props)=>{
    return (
       <div>
         <h3 style={{ color:'red'}}> Name: {props.name} logged in as {props.type}</h3>
    </div>
  )
}

export default User
