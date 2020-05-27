import React from 'react';

const Card =({name,id,email})=>{
  
	return(
    <div className='tc bg-light-green dib br3 pa2  ma2 grow bw1 shadow-5'>
    
      <img src={`https://robohash.org/${id}?150*150`} alt='Robots' />
      <div>
      	<h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>

		)
}

export default Card;