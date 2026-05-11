import { useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const allContent = [
  { id: 1, title: "Головна", path: "/", text: "Лисиця звичайна Vulpes vulpes хитрий хижак" },
  { id: 2, title: "Зовнішній вигляд", path: "/morphology", text: "морда вуха хвіст пухнастий білий кінчик руда шерсть" },
  { id: 3, title: "Харчування", path: "/nutrition", text: "миші полівки полювання всеїдна раціон комахи ягоди" },
  { id: 4, title: "Ареал та популяція", path: "/population", text: "Європа Азія Америка Австралія поширення" },
  { id: 5, title: "Галерея", path: "/photo", text: "фотографії лисиці в снігу портрет" },
];

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.text.toLowerCase().includes(query)
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Результати пошуку: <span className="text-primary">"{query}"</span></h1>

      {results.length > 0 ? (
        <div className="row g-4">
          {results.map(item => (
            <div className="col-md-6" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">{item.text}</p>
                  <Link to={item.path} className="btn btn-primary">
                    Перейти на сторінку →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info">
          За запитом "<strong>{query}</strong>" нічого не знайдено. Спробуйте інші ключові слова.
        </div>
      )}

      <div className="mt-4">
        <Link to="/" className="btn btn-outline-secondary">← Повернутися на головну</Link>
      </div>
    </div>
  );
}

export default SearchResults;