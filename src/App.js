import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Porto from './components/Portfolio';
import Skill from './components/skills';
import High from './components/Highlights';
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
