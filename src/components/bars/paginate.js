import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './bars.scss'

function Paginate(props) {
  const postNum = useSelector(state => state.posts)
  let pageNum = Math.ceil(postNum.length / 10)
  
  const [pagesToSelect, setPagesToSelect] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let i = 1
    let num = pageNum
    const pages = []
    while (num > 0) {
      pages.push(i)
      i++
      num--
      console.log(pages)
    }
    setPagesToSelect(pages)
  }, [postNum, pageNum])

  const passCurrentPageUp = (e) => {
    setCurrentPage(e.target.value)
    props.onSelectPage(currentPage)
  }

  return (
    <div className="paginate-main">
      <select value={currentPage} onChange={passCurrentPageUp}>
        {pagesToSelect.map((x, y) => {
          return (
            <option key={y}>
              {x}
            </option>)
        })}
      </select>
    </div>
  )
}

export default Paginate