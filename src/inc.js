import React from 'react'
import { connect } from 'react-redux'

const inc = ({count, increase, decrease}) => {
  return (
    <div>
        Count from store : {count} <br></br>
      <button>Increment</button>  &nbsp; &nbsp;
      <button>decrement</button>
    </div>
  )
}

export default inc
