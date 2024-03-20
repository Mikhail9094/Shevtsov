import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose?(): void;
  children: ReactNode;
  addClass?: string;
  addClassBackdrop?: string;
}
