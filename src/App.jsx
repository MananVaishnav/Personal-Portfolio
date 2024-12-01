// import './App.css'

import { useState } from "react"
import Loadingscreen from "./LoadingScreen/Loadingscreen";
import Home from "./Homepage/Home";
import Header from "./Header/Header";
import Blog from "./Header/Blogs/Blog";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Overlay from "./Overlay/Overlay";

function App() {

  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
      <Router>
      <div>
        
        {!loadingComplete ? (
          <Loadingscreen onLoadingComplete={() => setLoadingComplete(true)} />
        ) : (
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/> 
            </Routes>
        )}
        {/* <Header /> */}

      </div>
      </Router>
  )
}

export default App
