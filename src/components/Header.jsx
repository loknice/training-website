import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🦊 Лисиця звичайна
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Головна</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/morphology">Зовнішній вигляд</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nutrition">Харчування</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/population">Ареал та популяція</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/photo">Галерея</Link>
            </li>
          </ul>

          {/* Пошук */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Пошук по сайту..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '280px' }}
            />
            <button className="btn btn-outline-light" type="submit">
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;