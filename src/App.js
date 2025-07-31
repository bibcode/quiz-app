import Container from './container';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './signup';
import Login from './login';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/container' element={<Container/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
