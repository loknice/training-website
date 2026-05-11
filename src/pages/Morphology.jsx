function Morphology() {
  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Зовнішній вигляд Лисиці звичайної</h1>
      <h2 className="text-center text-muted mb-5">(Vulpes vulpes)</h2>

      <div className="text-center mb-5">
        <img 
          src="/images/morphology-main.jpg" 
          className="img-fluid rounded shadow-lg" 
          alt="Лисиця звичайна" 
          style={{ maxHeight: '520px' }}
        />
      </div>

      <div className="row">
        <div className="col-lg-7">
          <h3>Загальна будова тіла</h3>
          <p>Лисиця звичайна — стрункий, витончений хижак середніх розмірів. Тіло гнучке, пристосоване для швидкого бігу та полювання.</p>

          <h4 className="mt-4">Основні розміри:</h4>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Параметр</th>
                <th>Значення</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Довжина тіла</td><td>60–90 см</td></tr>
              <tr><td>Довжина хвоста</td><td>40–60 см</td></tr>
              <tr><td>Вага</td><td>6–10 кг (до 14 кг)</td></tr>
              <tr><td>Кількість дитинчат</td><td>4–6 (іноді до 12)</td></tr>
            </tbody>
          </table>

          <h3 className="mt-5">Характерні особливості</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Морда:</strong> гостра, витягнута</li>
            <li className="list-group-item"><strong>Вуха:</strong> великі, з чорними кінчиками</li>
            <li className="list-group-item"><strong>Хвіст:</strong> пухнастий з <strong>білим кінчиком</strong></li>
            <li className="list-group-item"><strong>Забарвлення:</strong> руде зверху, біле знизу</li>
          </ul>
        </div>

        <div className="col-lg-5">
          <div className="row g-3">
            <div className="col-6"><img src="/images/fox-head.jpg" className="img-fluid rounded shadow" alt="Голова" /></div>
            <div className="col-6"><img src="/images/fox-tail.jpg" className="img-fluid rounded shadow" alt="Хвіст" /></div>
            <div className="col-12"><img src="/images/fox-ears.jpg" className="img-fluid rounded shadow" alt="Вуха" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morphology;