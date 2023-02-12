import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./users/pages/Users";
import { Navigate } from "react-router";
import Places from "./places/pages/Places";
import NewPlace from "./places/pages/NewPlace";

export default function App() {
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
}
