import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Sermons from "./pages/Sermons";
import Profile from "./pages/Profile";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";


  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sermons" element={<Sermons />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default App;
