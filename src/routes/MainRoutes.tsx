import { Routes, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";

//-----------------------------------------
const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
