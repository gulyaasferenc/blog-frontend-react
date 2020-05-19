import React from 'react'
import { useSelector } from 'react-router-dom'

function Postfeed() {
  const posts = useSelector(state => state.posts)

  const postElements = (
    posts.map(x => {
      return (
        <div>
          <h3>{x.title}</h3>
          <p>{x.text.substring(0, 100)}</p>
          <button type="button"></button>
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