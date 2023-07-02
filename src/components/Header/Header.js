import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <a href="#" className="logo__link">
              <h3 className="logo__text">
                <b className="logo-acent">HD</b>Rezka
              </h3>
            </a>
          </div>
          <ul className="menu">
            <li className="menu__items">
              <a href="#" className="menu__links">
                Фильмы
              </a>
            </li>
            <li className="menu__items">
              <a href="#" className="menu__links">
                Сериалы
              </a>
            </li>
            <li className="menu__items">
              <a href="#" className="menu__links">
                Мультфильмы
              </a>
            </li>
            <li className="menu__items">
              <a href="#" className="menu__links">
                Аниме
              </a>
            </li>
          </ul>
          <div className="search">
            <form action="GET" className="search-box">
              <input type="search" className="search__input" placeholder="Поиск" />
              <button className="search__btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
