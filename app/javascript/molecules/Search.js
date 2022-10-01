import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const Search =() => {
  return (
    <div className=' rounded-3xl border-solid border-2 border-black flex items-center w-full'>
      <div className='flex flex-row gap-6 px-4 items-center'>
        <SearchIcon/>
        <p>Buscar cualquier cosa</p>
      </div>
    </div>
  )
}

export default Search