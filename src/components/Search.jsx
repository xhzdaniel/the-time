import React from 'react'

export const Search = ({sumit}) => {
  return (
    <div className='search'>

    <form action="" onSubmit={sumit}>
        <input type="text" placeholder='City' />
        <button><i class="fas fa-search"></i> Search</button>
    </form>
    
    </ div>
  )
}
