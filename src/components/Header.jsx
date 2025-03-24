import React from 'react'

function Header(props) {
  return (
    <>
        <h1>Hello {props.name} age is : {props.age}</h1>
    </>
  )
}

export default Header