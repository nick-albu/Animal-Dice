import './App.css';
import Landing from './pages/Landing';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Browser router imports and setup below, add link to Landing.jsx


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/home" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




// ...

    