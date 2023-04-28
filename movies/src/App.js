import Admin from "./components/Admin/Admin";
import Movies from "./components/Movies/Movies";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Auth from "./components/Auth/Auth"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>

    </div>
  )
}

export default App;
