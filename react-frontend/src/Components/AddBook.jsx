import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LibraryContext } from "../context";

const AddBook = () => {
  const { setError, error, loading, isLoading } = useContext(LibraryContext);
  const [data, setdata] = useState("");
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const isbnRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const addBook = async (e) => {
    e.preventDefault();
    isLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/create", {
        title: titleRef.current.value,
        author: authorRef.current.value,
        isbn: isbnRef.current.value,
      });

      setdata(response.data);

      titleRef.current.value = "";
      authorRef.current.value = "";
      isbnRef.current.value = "";
    } catch (error) {
      setError(error.message);
    } finally {
      isLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={addBook}>
        <label>
          Title:
          <input ref={titleRef} placeholder="Enter the Title:" type="text" />
        </label>
        <label>
          Author:
          <input ref={authorRef} placeholder="Enter the Author:" type="text" />
        </label>
        <label>
          ISBN:
          <input ref={isbnRef} placeholder="Enter the ISBN:" type="text" />
        </label>
        <button type="submit">Add Book</button>
      </form>

      {loading ? "Loading...." : error ? error : data}
    </div>
  );
};

export default AddBook;
