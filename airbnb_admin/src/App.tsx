import {
  BrowerRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
