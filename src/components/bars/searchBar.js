import React from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../store/actions'


const SearchBar = () => {
  const [filter, setFilter] = React.useState('')
  const dispatch = useDispatch()

  const onFilterChange = (e) => {
    if (e.target.value)  {
      setFilter(e.target.value)
    } else {
      setFilter(null)
    }
    
  }

  return (
    <div className="filter">
      <div style={{ display: 'flex' }}>
        <input type="text" value={filter} onChange={(event) => { onFilterChange(event) }} />
        <button type="button" className="button-success" onClick={() => { dispatch(getPosts(0, filter)) }}>Search</button>
      </div>

    </div>
  )
}

export default SearchBar
