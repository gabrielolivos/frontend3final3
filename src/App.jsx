/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import { useContextoDental } from "./Context";
import Favs from "./Routes/Favs";


function App() {

  const {stateDental, dispatchDental} = useContextoDental()


  return (
      <div className= {`App ${stateDental.dark ? "dark" : null}`} >
          <Navbar/>
          <Routes>

            <Route path='/home' element={<Home/>}/>
            <Route path='/dentist/:id' element={<Detail/>} />
            <Route path='/contacto' element={<Contact/>} />
            <Route path='/favs' element={<Favs/>} />

          </Routes>
          <Footer />
      </div>
  );
}

export default App;
