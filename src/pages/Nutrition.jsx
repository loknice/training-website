function Nutrition() {
  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Харчування Лисиці звичайної</h1>

      <div className="text-center mb-5">
        <img src="/images/nutrition-main.jpg" className="img-fluid rounded shadow" alt="Лисиця на полюванні" style={{maxHeight: '500px'}} />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3>Тип харчування</h3>
          <p>Лисиця — <strong>всеїдний хижак</strong>. Основу раціону складають дрібні ссавці.</p>

          <h4 className="mt-4">Основний раціон:</h4>
          <ul className="list-group">
            <li className="list-group-item">Миші та полівки (до 70% взимку)</li>
            <li className="list-group-item">Зайці, птахи, яйця</li>
            <li className="list-group-item">Комахи, черви</li>
            <li className="list-group-item">Ягоди та фрукти (восени)</li>
          </ul>

          <div className="mt-5 p-4 bg-light rounded">
            <h5>Цікавий факт</h5>
            <p>Лисиці роблять запаси їжі і чудово пам’ятають, де їх заховали.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;