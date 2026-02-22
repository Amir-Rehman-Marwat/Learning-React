import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Pagination from './components/pagination';
function App() {
  const [data, setData] = useState(["LOADING..."])
  const [page, setPage] = useState(1)
  const getdata= async ()=>{
const response=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`)
setData(response.data)
  }
  useEffect(() => {
   getdata()
  }, [])
  useEffect(() => {
   getdata()
  }, [page])
  
  if(data.length>1){
  return (
    <div>
      <div className="container">
   
{data.map((val,idx)=>{
        return <React.Fragment key={idx}>
        <a href={val.url}  >
            <div className="img"  >
            <img src={val.download_url} alt="img" />
            <h3 className="autherName">{val.author}</h3>
          </div>
        </a>
   </React.Fragment>
        
      })}
      

      </div> 
       <Pagination page={page} setPage={setPage} />
    </div>
  )}else{
    return <h3>{data[0]}</h3>
    
  }
}

export default App
