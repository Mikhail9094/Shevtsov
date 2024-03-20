import { useEffect, useState } from "react";
import styles from "./data.module.scss";
import { dateString } from "./constants";
import ShortDescription from "../../../Components/ShortDescription";
import { getData } from "../../../api";
import { Valute } from "../../../api/types";
import { useResize } from "../../../hooks/useResize";
import { Props } from "./types";
import { breakpoints } from "../../../constants";

function Data({ addClass }: Props) {
  const [exchangeRate, setExchangeRate] = useState<Valute>();
  const widthWindowBrowser = useResize();
  const sumNumbersInDate = Array.from(dateString).reduce((sum, item) => sum + Number(item), 0);

  useEffect(() => {
    const getExchangeRate = async () => {
      const exchangeRate = (await getData()).Valute;
      setExchangeRate(exchangeRate);
    };
    getExchangeRate();
  }, []);

  return (
    <div className={`${styles.data} ${addClass}`}>
      <ShortDescription
        data={sumNumbersInDate}
        shortDescription={
          widthWindowBrowser > breakpoints.tablet ? (
            <>
              техник для <br />
              достижения целей
            </>
          ) : (
            "техники"
          )
        }
        addClass={styles.description}
        addClassData={styles["data-description"]}
        addClassText={styles["text-description"]}
      />
      <ShortDescription
        data={Math.round(exchangeRate?.GBP.Value || 0)}
        shortDescription={
          widthWindowBrowser > breakpoints.tablet ? (
            <>
              увеличение личной <br /> продуктивности
            </>
          ) : (
            "продуктивности"
          )
        }
        addClass={styles.description}
        addClassData={styles["data-description"]}
        addClassText={styles["text-description"]}
      />
    </div>
  );
}

export default Data;
