import React from 'react'
import { useSelector } from 'react-redux'
import PostDetails from './postDetails'

import '../../App.scss'

function Postfeed() {
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
          <h3>{x.title}</h3>
          <p>{x.text.substring(0, 100)}</p>
          <button className="button-success" type="button" onClick={({id = x.id}) => { onReadButton(id) }} >Read...</button>
          <hr/>
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

export default Postfeed