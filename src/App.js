
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { useState } from 'react';
//import Home from './Pages/Home/Home';
function App() {

  const [sidebar,setSidebar] =useState(true);
  return (
    <div className="App">
      <Navbar  setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home  sidebar={sidebar}/>} />
        <Route path='/Video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
