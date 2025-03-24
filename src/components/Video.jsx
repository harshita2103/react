import React from 'react'
import '../App.css'
function Video(props) {
  return (
    <>
        <video controls muted autoPlay loop>
            <source  src={props.src}/>
        </video>
    </>
  )
}

export default Video