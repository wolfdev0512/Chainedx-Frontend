import React from "react";

// Route
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "routes/MainRoutes";

//-----------------------------------------
const App: React.FC = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

export default App;
