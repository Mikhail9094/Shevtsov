import styles from "./thanks.module.scss";

function Thanks() {
  return (
    <section className={styles.thanks}>
      <h2 className={styles.thanks__title}>
        Спасибо <br /> за заявку
      </h2>
      <p className={styles.thanks__text}>
        Я обязательно <br />
        свяжусь с вами <br /> в ближайшее время.
      </p>

      <div className={styles.thanks__logo}>
        <img src="/img/logo.svg" alt="logo" />
      </div>
    </section>
  );
}

export default Thanks;
