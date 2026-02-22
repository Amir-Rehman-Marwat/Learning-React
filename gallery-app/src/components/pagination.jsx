import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
export default function Pagination({page,setPage}) {
  return (
    <div className="pagination">
              <button  className='prev-btn' onClick={function(){
                console.log("decreasing page")
                if(page>1){
                  setPage(page-1)
                }else{
                  alert("cant'go back further...")
                }
              }}> <ChevronLeft /> Prev</button>
              <h4 className="pageNumber">Page {page}</h4>
              <button className='next-btn' onClick={function(){
                console.log("increasing page")
                setPage(page+1)
              }}>Next <ChevronRight /></button>
              
              
                    </div>
  )
}
