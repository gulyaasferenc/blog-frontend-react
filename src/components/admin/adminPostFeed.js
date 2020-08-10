import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import paginate from '../bars/paginate'

const adminPostFeed = () => {
  const posts = useSelector(state => state.posts)

  const [pageNum, setPageNum] = React.useState(1)
  const handleOnselectPage = () => {
    
  }
  
  }, [pageNum])

  const postsView = posts.map((post, index) => {
    
  })

  return postsView
}

export default adminPostFeed