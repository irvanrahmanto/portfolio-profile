import { Routes, Route } from "react-router-dom";

/** import components */
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
