
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './MainLayout/main';
import Home from './pages/homepage/home';
import Add from "./pages/addpage/add";
import Detail from "./pages/detailpage/detail";
function App() {

 return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/add" element={<Add/>} />
<Route path="/:id" element={<Detail/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
