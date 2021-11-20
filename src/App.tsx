import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileData from "./components/ProfileData";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":userId" element={<Profile />} />
          <Route path="data" element={<ProfileData />} />
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
