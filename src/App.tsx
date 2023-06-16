import React from "react";

// Route
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "routes/MainRoutes";

// Notification
import { NotificationContainer } from "react-notifications";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//-----------------------------------------
const App: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Router>
      <MainRoutes />
      <NotificationContainer />
    </Router>
  );
};

export default App;
