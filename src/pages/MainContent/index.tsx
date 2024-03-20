import { useContext } from "react";
import CustomButton from "../../Components/CustomButton";
import Data from "./Data";
import styles from "./mainPage.module.scss";
import { ContextApp } from "../../contexts/AppContext/AppContext";
import { useResize } from "../../hooks/useResize";
import { breakpoints } from "../../constants";

const MainContent = () => {
  const { app, changeOpenModal } = useContext(ContextApp);
  const widthWindowBrowser = useResize();

  console.log("openModal", app.openModal);

  return (
    <section className={styles.content}>
      <div className={styles.content__wrapper}>
        <div className={styles.info}>
          <div className={styles.info__main}>
            <h1 className={styles.info__title}>cоздаю условия для вашего успеха</h1>
            <p className={styles.info__text}>
              {widthWindowBrowser > breakpoints.tablet
                ? `Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям
            становится реальностью, ваш успех зависит от ваших действий`
                : "Ваш успех зависит от ваших действий"}
            </p>
          </div>
          <div className={styles.info__buttons}>
            <CustomButton
              text={
                widthWindowBrowser > breakpoints.xl ? "Записаться на консультацию" : "Записаться"
              }
              imgUrl="/img/icons/vector-dark.svg"
              colorDividingLine="#0b3461"
              addClass={styles["button-registration"]}
              addClassText={styles["change-text"]}
              onClick={changeOpenModal}
            />
            <CustomButton
              text={
                widthWindowBrowser > breakpoints.xl ? "Бесплатная консультация" : "Заказать звонок"
              }
              imgUrl="/img/icons/vector-white.svg"
              addClass={styles["order-call"]}
              addClassText={styles["change-text"]}
              onClick={changeOpenModal}
            />
          </div>
        </div>
        <Data />
      </div>
      <div className={styles.content__img}>
        <img src="/img/mentor.png" alt="mentor" className={styles.mentor} />
      </div>
    </section>
  );
};

export default MainContent;
