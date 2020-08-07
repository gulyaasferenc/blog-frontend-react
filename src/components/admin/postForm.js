import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import query from 'query-string'
import http from '../../axios'
import './admin.scss'
import './login.scss'

const PostForm = ({ mode }) => {
  const posts = useSelector(state => state.posts)
  const [formValues, setFormValues] = React.useState({
    title: '',
    text: '',
    tags: '',
    imageUrl: ''
  })
  const history = useHistory()
  const location = useLocation()
  React.useEffect(() => {
    if (mode === 'edit') {
      const myPost = posts.filter(x => x.id === query.parse(location.search).postId)[0]
      setFormValues({ ...myPost, tags: myPost.tags.join(',') })
    }
  }, [])
  const sendPost = (event) => {
    const toSend = {
      ...formValues,
      tags: formValues.tags.split(',')
    }
    http.post('/createPost', toSend)
    event.preventDefault()
  }

  return (
    <div>
      <form style={{padding: '20px'}}>
        <input type="text" placeholder="title" onChange={(event) => { setFormValues({ ...formValues, title: event.target.value }) }} />
        <textarea placeholder="Post body" onChange={(event) => { setFormValues({ ...formValues, text: event.target.value }) }} />
        <input type="text" placeholder="image url" onChange={(event) => { setFormValues({ ...formValues, imageUrl: event.target.value }) }} />
        <input type="text" placeholder="tags" onChange={(event) => { setFormValues({ ...formValues, tags: event.target.value }) }} />
        <div>
          <button type="submit" className="button-success" onClick={(event) => { sendPost(event) }}>Send</button>
          <button type="button" className="button-reject" onClick={() => { history.push('/admin') }}>Cancel</button>
        </div>
      </form>
    </div>
  )

}

export default PostForm