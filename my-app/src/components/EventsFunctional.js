import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the functional button")
    }
  return (
    <button onClick={clickHandler}>click me - functional component</button>
  )
}

export default EventsFunctional