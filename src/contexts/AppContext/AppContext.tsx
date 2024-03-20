import { createContext, useState } from "react";
import { AppContextProps, IApp, Props } from "./types";

export const ContextApp = createContext({} as Props);

function AppContext({ children }: AppContextProps) {
  const [app, setApp] = useState<IApp>({
    openModal: false,
    sentForm: false,
  });

  const changeOpenModal = () => {
    setApp((prev) => ({ ...prev, openModal: !prev.openModal }));
  };

  const changeSentForm = () => {
    setApp((prev) => ({ ...prev, sentForm: true }));
  };

  const closeModal = () => {
    changeOpenModal();
    setApp((prev) => ({ ...prev, sentForm: false }));
  };

  return (
    <ContextApp.Provider value={{ app, changeOpenModal, closeModal, changeSentForm }}>
      {children}
    </ContextApp.Provider>
  );
}

export default AppContext;
