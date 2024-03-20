import styles from "./shortDescription.module.scss";
import { Props } from "./types";

function ShortDescription({ data, shortDescription, addClass, addClassText, addClassData }: Props) {
  return (
    <div className={`${styles.description} ${addClass}`}>
      <span className={`${styles.description__data} ${addClassData}`}>{data}</span>
      <p className={`${styles.description__text} ${addClassText}`}>{shortDescription}</p>
    </div>
  );
}

export default ShortDescription;
