import './App.css';
import './components/Controlpanel';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Controlpanel from './components/Controlpanel';
import Headertop from './components/Headertop';
import Headmidle from './components/Headmidle';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Room from './components/Room';

function App() {
  return (
   <div className='bg-regal-bluebacground grid justify-items-center  place-content-center justify-center w-378'>
   <Router> 

<Headertop />
<Routes>
<Route path="/" element={<MainContent />} />
<Route path="room" element={<Room />} >
    <Route path=":title" element={<Room />} /> 
    </Route>

 </Routes>



< Footer />

   </Router>
   </div>
 )

 }
export default App;