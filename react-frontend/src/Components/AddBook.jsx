import React, { useEffect, useRef } from 'react'

const AddBook = () => {
  const inputRef=useRef(null);

 useEffect(()=>{
  inputRef.current.focus();
 },[])

 
  return (
    <div>
      <form>
        <label>
          Title:
          <input ref={inputRef} placeholder='Enter the Title:'></input>
        </label>
        <label>
          Author:
          <input placeholder='Enter the Author:'></input>
        </label>
        <label>
          ISBN:
          <input placeholder='Enter the ISBN:'></input>
        </label>
        <button >Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
