import { useEffect } from 'react';

function Population() {
  useEffect(() => {
    // Плавна прокрутка для TOC
    const links = document.querySelectorAll('.list-group-item');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('href').substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Ареал та популяція Лисиці звичайної</h1>

      <div className="row">
        {/* Table of Contents */}
        <div className="col-lg-3">
          <div className="sticky-top" style={{ top: '90px' }}>
            <h5 className="mb-3">Зміст</h5>
            <div className="list-group">
              <a href="#europe" className="list-group-item list-group-item-action">Європа</a>
              <a href="#asia" className="list-group-item list-group-item-action">Азія</a>
              <a href="#america" className="list-group-item list-group-item-action">Північна Америка</a>
              <a href="#australia" className="list-group-item list-group-item-action">Австралія</a>
              <a href="#status" className="list-group-item list-group-item-action">Статус популяції</a>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="col-lg-9">
          <div className="accordion" id="populationAccordion">

            <div className="accordion-item" id="europe">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEurope">
                  Європа
                </button>
              </h2>
              <div id="collapseEurope" className="accordion-collapse collapse show" data-bs-parent="#populationAccordion">
                <div className="accordion-body">
                  Поширена майже на всій території Європи (крім Крайньої Півночі). Найвища щільність у лісостеповій зоні України, Польщі, Німеччини.
                </div>
              </div>
            </div>

            <div className="accordion-item" id="asia">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAsia">
                  Азія
                </button>
              </h2>
              <div id="collapseAsia" className="accordion-collapse collapse" data-bs-parent="#populationAccordion">
                <div className="accordion-body">
                  Мешкає від Близького Сходу до Далекого Сходу, включаючи Китай, Японію та Індію.
                </div>
              </div>
            </div>

            <div className="accordion-item" id="america">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAmerica">
                  Північна Америка
                </button>
              </h2>
              <div id="collapseAmerica" className="accordion-collapse collapse" data-bs-parent="#populationAccordion">
                <div className="accordion-body">
                  Інтродукована в XIX столітті. Широко поширена в США та Канаді.
                </div>
              </div>
            </div>

            <div className="accordion-item" id="australia">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAustralia">
                  Австралія
                </button>
              </h2>
              <div id="collapseAustralia" className="accordion-collapse collapse" data-bs-parent="#populationAccordion">
                <div className="accordion-body">
                  Завезена людиною. Вважається інвазивним видом, негативно впливає на місцеву фауну.
                </div>
              </div>
            </div>

            <div className="accordion-item" id="status">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStatus">
                  Статус популяції
                </button>
              </h2>
              <div id="collapseStatus" className="accordion-collapse collapse" data-bs-parent="#populationAccordion">
                <div className="accordion-body">
                  Вид не перебуває під загрозою зникнення. Чисельність стабільна завдяки високій адаптивності.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Population;