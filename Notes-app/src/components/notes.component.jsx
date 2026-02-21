import React from 'react'

function NoteComponent(props) {
    console.log(props)
  return (
   <div className="notes">
          <h3 className="notes-title-heading">{props.title.title}</h3>
          <p className="details-p">{props.data.details}</p>
        </div>
  )
}

export default NoteComponent