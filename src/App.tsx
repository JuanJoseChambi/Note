import { Routes, Route } from "react-router-dom";
import Home from "./View/Home/Home";
import { NoteProvider } from "./Contexts/NoteProvider";

function App() {
  return (
    <NoteProvider>
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </NoteProvider>
  );
}

export default App;
