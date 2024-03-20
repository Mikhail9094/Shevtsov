import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Header from "./Header";

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
