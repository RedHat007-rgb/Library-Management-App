
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";
import Error from "./Components/Error";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="create" element={<AddBook/>}/>
          <Route path="update" element={<EditBook/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
