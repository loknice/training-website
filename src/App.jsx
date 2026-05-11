import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Morphology from './pages/Morphology'
import Nutrition from './pages/Nutrition'
import Population from './pages/Population'
import Photo from './pages/Photo'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/morphology" element={<Morphology />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/population" element={<Population />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App