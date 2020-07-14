import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/'
import { useLocation, useHistory } from 'react-router-dom'
import query from 'query-string'

import PostArea from '../components/mainParts/postArea'
import Paginate from '../components/bars/paginate'
import PostDetails from '../components/posts/postDetails'

import './mainView.scss'

function MainView() {
  const location = useLocation()
  const postId = query.parse(location.search).postId
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.loading)
  const [pageSelected, setPageSelected] = useState(0)

  const onCancel = () => {
    history.push('/')
  }

  useEffect(() => {
    dispatch(getPosts(pageSelected))
    console.log(pageSelected)
  }, [pageSelected, dispatch])

  let renderIt
  if (isLoading) {
    renderIt = <div>Posts are loading...</div>
  } else {
    renderIt = (
      <div className="mainarea">
        {postId ? <PostDetails onCancel={onCancel} /> : <PostArea />}
      </div>)
  }

  return (
    <div>
      {renderIt}
      <Paginate onSelectPage={setPageSelected} />
    </div>
  )
}

export default MainView