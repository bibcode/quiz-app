import Container from './container';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/container' element={<Container/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
