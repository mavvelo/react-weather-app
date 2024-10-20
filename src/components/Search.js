import React from 'react'
import '../styles/components/Search.scss'

const Search = () => {
  return (
  <>
    <div className='search-container'>
      <div className='search-icon'>
        <i className='bi bi-search'></i>
    </div>
    <div className='search-input'>
      <input 
      type='text'
      name='search'
      placeholder='Search for places'
      />
    </div>
    </div>
  </>
  )
}


export default Search