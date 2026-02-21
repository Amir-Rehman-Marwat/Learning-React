import React from 'react'

function NoteComponent(props) {
  return (
   <div className="notes">
          <h3 className="notes-title-heading">{props.title}</h3>
          <p className="details-p">{props.data}</p>
        </div>
  )
}

export default NoteComponent