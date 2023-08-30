import Home from './pages/Home';
import Movies from './pages/Movies';
import DetailMovie from './pages/DetailMovie';

import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movie/:id" element={<DetailMovie />} />
      </Routes>
    </>
  )
}
export default App

