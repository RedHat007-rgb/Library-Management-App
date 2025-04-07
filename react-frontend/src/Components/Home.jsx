import React, { useContext } from "react";
import { LibraryContext } from "../context";

const Home = () => {
  const { list } = useContext(LibraryContext);

  return (
    <div>
      <div>
        {list?.map((book) => (
          <h1 key={book.ISBN}>{book.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
