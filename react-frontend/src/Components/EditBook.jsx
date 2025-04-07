import React, { useEffect, useRef } from 'react'

const EditBook = () => {

  const inputRef=useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div>
     <form>
      <label>
        Title:
        <input ref={inputRef}   placeholder='Enter the title'></input>
      </label>
      <button>Search</button>
     </form>
    </div>
  )
}

export default EditBook
