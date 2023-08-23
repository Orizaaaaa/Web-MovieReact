import Home from './pages/Home';
import Movies from './pages/Movies';

import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </>
  )
}
export default App

