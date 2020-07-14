import React from 'react'
import { useSelector } from 'react-redux'
import PostDetails from './postDetails'
import { withRouter } from 'react-router-dom'

import './postDetails.scss'

function Postfeed({ history }) {
  const posts = useSelector(state => state.posts)
  const [postStuffs, setPostStuffs] = React.useState({
    postSelected: false,
    postId: null
  })

  const onReadButton = (id) => {
    console.log(id)
    setPostStuffs({
      postSelected: true,
      postId: id
    })
    history.push(`/?postId=${id}`)
  }

  const onCancel = () => {
    setPostStuffs({
      postSelected: false,
      postId: null
    })
  }

  const postElements = (
    posts.map((x, i) => {
      return (
        <div key={i}>
          <h3>{x.title} <span className="dateclass">
            ({new Date(x.createdAt).toLocaleDateString()} - {new Date(x.createdAt).toLocaleTimeString()})
          </span>
          </h3>
          <img height="100" style={{ float: 'left', marginRight: '10px' }} src={x.imageUrl} alt="broken" />
          <div className="postitem">
            <p > {x.text.substring(0, 300)} {x.text.length > 300 ? '...' : ''}</p>
            <button className="button-success" type="button" onClick={({ id = x.id }) => { onReadButton(id) }} >Read...</button>
          </div>
          <hr />
        </div>
      )
    })
  )

  return (
    <div>
      {postStuffs.postSelected ? <PostDetails onCancel={onCancel} postId={postStuffs.postId} /> : postElements}
    </div>
  )
}

export default withRouter(Postfeed)