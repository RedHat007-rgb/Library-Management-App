import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { LibraryContext } from "../context";

const Layout = () => {
  const [list, setList] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();

      setList(data);
    } catch {
      setError("Error while fetching bOOks from library");
    }
  };

  return (
    <div>
      <LibraryContext.Provider
        value={{
          list: list,
          isLoading: isLoading,
          loading: loading,
          error: error,
          setList: setList,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </LibraryContext.Provider>
    </div>
  );
};

export default Layout;
