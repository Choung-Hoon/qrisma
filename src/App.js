import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Fetch from "./components/fetch/Fetch";
import Axios from "./components/fetch/Axios";
import NotFound from "./components/NotFound";
import CustomNavbar from "./components/CustomNavbar";

const HOME_URL = "";

function App() {
  console.log(process.env.PUBLIC_URL);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        {/* 네비게이션 바 추가 */}
        <CustomNavbar />
        {/* Routes 컴포넌트로 라우트를 정의합니다. */}
        <Routes>
          {/* element prop을 사용하여 각 라우트를 정의합니다. */}
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/contact`} element={<Contact />} />

          <Route path={`/fetch/v1`} element={<Fetch />} />
          <Route path={`/fetch/v2`} element={<Axios />} />
          {/* *은 모든 일치하지 않는 경로에 대한 라우트입니다. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
