import React from 'react';

const SearchBox=({SearchField,SearchInputChange})=>{
    return(
        <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue'
        type='search' placeholder='Search Robots'
            onChange={SearchInputChange}
        />
        </div>
    )
};
export default SearchBox;