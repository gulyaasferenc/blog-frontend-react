import React from 'react'
import { useSelector } from 'react-redux'

import '../../App.scss'

function Postfeed() {
  const posts = useSelector(state => state.posts)

  const postElements = (
    posts.map(x => {
      return (
        <div>
          <h3>{x.title}</h3>
          <p>{x.text.substring(0, 100)}</p>
          <button className="button-success" type="button">Read...</button>
        </div>
      )
    })
  )

  return (
    <div>
      {postElements}
    </div>
  )
}

export default Postfeed