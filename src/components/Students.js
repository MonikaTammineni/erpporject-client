import React from 'react'
import PresenceButton from './PresenceButton'

const students = () => {
  return (
    <div class="body">
      <h2>Students </h2>
     <table>
        <thead>
        <tr>
            <td>NAME</td>
            <td>ID</td>
            <td>BRANCH</td>
            <td>YEAR</td>
            <td>ATTENDENCE</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Monika</td>    
            <td>32536 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        <tr>
            <td>Sri</td>    
            <td>30001 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        <tr>
            <td>Riya</td>    
            <td>30002 </td>   
            <td>CSE</td>
            <td>2</td>  
            <td><PresenceButton/></td>       
        </tr>
        <tr>
            <td>ramya</td>    
            <td>30003 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        <tr>
            <td>idk</td>    
            <td>30001 </td>   
            <td>CSE</td>
            <td>2</td>
            <td><PresenceButton/></td>
        </tr>
        </tbody>
      </table>
      
    </div> 
  )
}

export default students
