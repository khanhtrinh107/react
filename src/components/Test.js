import React from 'react'

export default function Test(props) {
  return (
    <div>
        <p>{props.studentName} : {props.children}</p>
    </div>
  )
}
