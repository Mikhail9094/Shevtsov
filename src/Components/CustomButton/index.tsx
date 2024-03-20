import styles from "./customButton.module.scss";
import { Props } from "./types";

function CustomButton({
  text,
  imgUrl,
  alt,
  addClass,
  addClassText,
  addClassImg,
  colorDividingLine,
  onClick,
  type = "button",
}: Props) {
  return (
    <button className={`${styles.button} ${addClass}`} onClick={onClick} type={type}>
      <span className={`${styles.button__text} ${addClassText}`}>{text}</span>
      <div className={styles.line} style={{ borderColor: colorDividingLine }} />
      <div className={`${styles.button__img} ${addClassImg}`}>
        <img src={imgUrl} alt={alt} />
      </div>
    </button>
  );
}

export default CustomButton;
