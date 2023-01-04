import React from 'react'

function Card(props) {
  return (
    <div key='{props.key}'>
        {props.children}
    </div>
  )
}

export default Card