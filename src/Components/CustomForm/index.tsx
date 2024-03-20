import { useContext, useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import styles from "./customForm.module.scss";
import { IData } from "./types";
import Thanks from "./Thanks";
import { ContextApp } from "../../contexts/AppContext/AppContext";

function CustomForm() {
  const [data, setData] = useState<IData>({ name: "", phone: "", privacy: false });
  const { app, changeSentForm } = useContext(ContextApp);

  useEffect(() => {
    setData({ name: "", phone: "", privacy: false });
  }, [app.openModal]);

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updatePrivacy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      privacy: e.target.checked,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeSentForm();
    console.log(data);
    setData({ name: "", phone: "", privacy: false });
  };

  return (
    <>
      {app.sentForm ? (
        <Thanks />
      ) : (
        <form onSubmit={onSubmit} className={styles.form}>
          <h3 className={styles.form__title}>Закажите обратный звонок</h3>

          <div className={styles.form__info}>
            <input
              type="text"
              name="name"
              placeholder="имя"
              value={data.name}
              onChange={(e) => updateData(e)}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="телефон"
              value={data.phone}
              onChange={(e) => updateData(e)}
              required
            />
          </div>

          <label className={styles.form__privacy}>
            Согласен на сохранение и обработку персональных данных
            <input type="checkbox" name="privacy" onChange={(e) => updatePrivacy(e)} required />
            <span></span>
          </label>

          <CustomButton
            type="submit"
            text="Бесплатная консультация"
            imgUrl="/img/icons/vector-white.svg"
            addClass={styles.button}
          />
        </form>
      )}
    </>
  );
}

export default CustomForm;
