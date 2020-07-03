import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/'

import PostArea from '../components/mainParts/postArea'
import Paginate from '../components/bars/paginate'

import './mainView.scss'

function MainView() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.loading)
  const [pageSelected, setPageSelected] = useState(0)
  useEffect(() => {
    dispatch(getPosts(pageSelected))
    console.log(pageSelected)
  }, [pageSelected, dispatch])

  let renderIt
  if (isLoading) {
    renderIt = <div>Posts are loading...</div>
  } else {
    renderIt = (<div className="mainarea">
      <PostArea />
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