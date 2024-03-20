import styles from "./header.module.scss";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextApp } from "../../../contexts/AppContext/AppContext";

function Header() {
  const { changeOpenModal } = useContext(ContextApp);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        <img src="/img/logo.svg" alt="logo" />
      </Link>

      <Nav />
      <div className={styles.header__contacts}>
        <button className={styles["header__contacts-button"]} onClick={changeOpenModal}>
          <img src="/img/icons/phone.svg" alt="phone-icon" />
        </button>
        <span>8-345-123-34-45</span>
      </div>
    </header>
  );
}

export default Header;
