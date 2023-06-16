import { Routes, Route } from "react-router-dom";

// Pages
import Home from "pages/Home/Home";
import Lost from "pages/Lost/Lost";
import App from "pages/App/App";
import Admin from "pages/Admin/Admin";

//-----------------------------------------
const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Lost />} />
    </Routes>
  );
};

export default MainRoutes;
