import React from 'react';
import Card from './Card.js'


const CardList=({robots})=>{

    return(
        <div>
{    robots.map((user,index)=>{
        return <Card key={index}
            name={robots[index].name} 
            id={robots[index].id} 
            email={robots[index].email}/>

            })
  
    
}
</div>)}

export default CardList;