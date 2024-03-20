import "./app.scss";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Mentoring from "./pages/Mentoring";
import Events from "./pages/Events";
import Cases from "./pages/Cases";
import Feedback from "./pages/Feedback";
import Contacts from "./pages/Contacts";
import Layout from "./Layouts/MainLayout";
import MainContent from "./pages/MainContent";
import Modal from "./Components/Modal";
import { useContext } from "react";
import { ContextApp } from "./contexts/AppContext/AppContext";
import CustomForm from "./Components/CustomForm";

function App() {
  const { app, closeModal } = useContext(ContextApp);

  return (
    <div className="app">
      <Modal open={app.openModal} onClose={closeModal}>
        <CustomForm />
      </Modal>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
