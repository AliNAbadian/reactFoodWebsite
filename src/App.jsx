import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import Create from './pages/Create/Create.jsx';
import Home from './pages/Home/Home.jsx';
import Recipe from './pages/Recipe/Recipe.jsx';
import Search from './pages/Search/Search.jsx';

import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
