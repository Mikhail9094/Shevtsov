import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <button className={styles.burger}>
        <img src="/img/icons/menu.svg" alt="menu" />
      </button>
      <ul className={styles.menu}>
        <li>
          <Link to="/about" className={styles.menu__link}>
            Обо мне
          </Link>
        </li>
        <li>
          <Link to="/mentoring" className={styles.menu__link}>
            Наставничество
          </Link>
        </li>
        <li>
          <Link to="/events" className={styles.menu__link}>
            Мероприятия
          </Link>
        </li>
        <li>
          <Link to="/Cases" className={styles.menu__link}>
            Кейсы
          </Link>
        </li>
        <li>
          <Link to="/feedback" className={styles.menu__link}>
            Отзывы
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={styles.menu__link}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
