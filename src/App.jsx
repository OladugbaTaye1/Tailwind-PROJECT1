import { Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Artistes from "./pages/Artistes"
import Music from "./pages/Music"
import Videos from "./pages/Videos"
import Session from "./pages/Session"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/artistes" element={<Artistes/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/session" element={<Session/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
