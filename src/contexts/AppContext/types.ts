import { ReactNode } from "react";

export interface Props {
  app: IApp;
  changeOpenModal(): void;
  closeModal(): void;
  changeSentForm(): void;
}

export interface IApp {
  openModal: boolean;
  sentForm: boolean;
}

export interface AppContextProps {
  children: ReactNode;
}
