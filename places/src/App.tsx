import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./users/pages/Users";
import { Navigate } from "react-router";
import Places from "./places/pages/Places";
import NewPlace from "./places/pages/NewPlace";
import Nav from "./shared/components/Navigation/Nav";

export default function App() {
  return (
    <Router>
      <Nav />
      <main className="mt-4">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="places">
            <Route index element={<Places />} />
            <Route path="new" element={<NewPlace />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}
