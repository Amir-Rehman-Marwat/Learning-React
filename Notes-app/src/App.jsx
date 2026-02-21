import React, { useState } from 'react'
import NoteComponent from './components/notes.component';
function App() {
const [title, setTitle] = useState("");
const [details, setDetails] = useState("")
const [record, setRecord] = useState([])
  const submitHandler=(e)=>{
e.preventDefault();
localStorage.setItem(`${title}`,JSON.stringify({title,details}))
const newRecord=[...record];
newRecord.push({title,details})
setRecord(newRecord)
setDetails("")
setTitle("")
console.log("Form submited and notes updated ");
  }
  return (
    <div className='container'>
      <div className="upper">
        <form action="" className="form" onSubmit={submitHandler}>
          <input type="text"
           name="title" 
           id="notes-title"
           value={title}
           onChange={function(dets){
setTitle(dets.target.value)
           }}
           className='inputs'
            placeholder='Enter the title of your notes' />
          <input type="text"
          name="details"
           id="notes-details"
            className='inputs'
            value={details}
             onChange={function(dets){
setDetails(dets.target.value)
           }}
            placeholder='write down details about your notes'>
             
                                          </input>
                          <button id="submit" onClick={submitHandler}>Submit</button>
        </form>
      </div>
      <div className="notes-container">
       {record.map((val,idx)=>{
        return <NoteComponent key={idx} title={val.title} data={val.details}/>
       })}
      </div>
    </div>
  )
}

export default App
