import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./ui/Layout";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashbaord" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
