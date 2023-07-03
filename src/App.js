import logo from './logo.svg';
import './App.css';
import { useNavigate, Routes, Route} from 'react-router-dom';
import Initial from './views/Initial/view';
import Login from './views/Login/view';
import Home from './views/Home/view';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Initial/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
   </Routes>

  );
}

export default App;
