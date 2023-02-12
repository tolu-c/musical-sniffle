import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Users from "./user/pages/Users";
import Places from "./places/pages/Places";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="places">
          <Route index element={<Places />} />
          <Route path="new" element={<NewPlace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
