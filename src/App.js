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
   <div className='bg-regal-bluebacgrounf py-24 grid items-center justify-center space-x-8 w-376px h-812px'>
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