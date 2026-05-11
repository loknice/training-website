function Photo() {
  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Фотогалерея Лисиці звичайної</h1>

      <div id="foxCarousel" className="carousel slide shadow-lg" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/photo1.jpg" className="d-block w-100 rounded" alt="Лисиця в снігу" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Лисиця в зимовому лісі</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/photo2.jpg" className="d-block w-100 rounded" alt="Портрет лисиці" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Крупний план</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/photo3.jpg" className="d-block w-100 rounded" alt="Хвіст лисиці" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Пухнастий хвіст</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/photo4.jpg" className="d-block w-100 rounded" alt="Лисиця на полюванні" />
            <div className="carousel-caption d-none d-md-block">
              <h5>На полюванні</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/photo5.jpg" className="d-block w-100 rounded" alt="Лисиця з лисинятами" />
            <div className="carousel-caption d-none d-md-block">
              <h5>З потомством</h5>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#foxCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#foxCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Photo;