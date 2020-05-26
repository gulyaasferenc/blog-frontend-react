import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/'

import PostArea from '../components/mainParts/postArea'

import './mainView.scss'

function MainView() {
  const dispatch = useDispatch()
  dispatch(getPosts(0))
  const [loading, setLoading] = useState(false)
  const isLoading =  useSelector(state => state.loading)

  useEffect(() => {
    setLoading(isLoading)
  },[isLoading])

  let renderIt
  if (loading) {
    renderIt = <div>Posts are loading...</div>
  } else {
    renderIt = (<div className="mainarea">
      <PostArea />
    </div>)
  }

  return (
    <div>
      {renderIt}
    </div>
  )
}

export default MainView