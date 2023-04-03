import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/TextLayer.css";
import resume from '../../images/Resume April 2023.pdf'

function Resume (){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
}
function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
}

function changePageBack(){
    changePage(-1)
}
function changePageNext(){
    changePage(+1)
}

return (
    <div id='/resume' name='resume' className='bg-neutral-900 flex justify-center main-container '>
        <div className='mt-20'>
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} >
      <Page height={600} pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
    </Document>
    <p className='text-white'> Page {pageNumber} of {numPages} </p>
    { pageNumber > 1 &&
    <button className= "shadow-lg shadow-indigo-500/20 text-indigo-600 border border-indigo-600 px-4 rounded mt-3 font-accent text-sm hover:text-indigo-400 hover:scale-105 duration-200"
    onClick={changePageBack}>Previous</button>}
    {pageNumber < numPages &&
    <button className= "shadow-lg shadow-indigo-500/20 text-indigo-600 border border-indigo-600 px-4 rounded mt-3 font-accent text-sm hover:text-indigo-400 hover:scale-105 duration-200" onClick={changePageNext}>Next</button>}
    </div> 
   
    </div>
    
)
}

export default Resume