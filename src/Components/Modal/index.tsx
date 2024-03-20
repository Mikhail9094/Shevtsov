import styles from "./modal.module.scss";
import { ModalProps } from "./types";

function Modal({ open, onClose, children, addClass, addClassBackdrop }: ModalProps) {
  return (
    <>
      <div className={`${styles.backdrop} ${addClassBackdrop} ${open && styles.active}`} />
      <div className={`${styles.modal} ${addClass} ${open && styles.active}`}>
        <button className={styles["close-button"]} onClick={onClose} />
        {children}
      </div>
    </>
  );
}

export default Modal;
