import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Porto from './Portfolio';
import Skill from './skills';
import High from './Highlights';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Navbar/>
 
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Portfolio' element={<Porto/>}/>
        <Route path='/Skills' element={<Skill/>}/>
        <Route path='/Highlights' element={<High/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
