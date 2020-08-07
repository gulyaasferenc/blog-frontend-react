import React from 'react'

const BackDrop = ({ killMe }) => {
  return <div onClick={killMe} style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 10, backgroundColor: 'black', opacity: 0.2 }}></div>
}

export default BackDrop