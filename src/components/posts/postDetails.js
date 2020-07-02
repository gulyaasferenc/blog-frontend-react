import React from 'react'
import http from '../../axios'
import './postDetails.scss'


const PostDetails = ({ postId, onCancel }) => {

  const [myPost, setMyPost] = React.useState(null)

  React.useEffect(() => {
    http.get(`/getOnePost/${postId}`)
      .then(myPost => {
        setMyPost(myPost.data.myPost)
        console.log(myPost)
      })
      .catch(err => {
        console.error(err)
      })

  }, [postId])

  const localOnCancel = () => {
    onCancel()
  }

  return (
    <div>
      <button type="button" onClick={localOnCancel}>Cancel</button>
      {!myPost ? <div> Post is loading... </div> :
        <div >
          <p className="centered " style={{ fontSize: 'larger' }}> <strong>{myPost.title}</strong> </p>
          <p className="postarea">
            {myPost.imageUrl ? <img src={myPost.imageUrl} alt="broken" /> : null}
            {myPost.text}</p>
        </div>}
    </div>

  )

}

export default PostDetails 