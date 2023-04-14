import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
