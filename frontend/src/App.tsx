import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import AddProfile from "./pages/AddProfile";
import Layout from "./Layout";
import AddProfileLayout from "./AddProfileLayout"
import VerificationProfile from "./pages/VerificationProfile";
import AddProfileStatus from "./pages/AddProfileStatus";
import Login from "./pages/Login";
import VerificationLogin from "./pages/VerificationLogin";

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verification" element={<VerificationLogin />} />
      <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
      </Route>
      <Route path="/add-profiles" element={<AddProfileLayout />}>
        <Route index element={<AddProfile />} />
        <Route path="verification-profile" element={<VerificationProfile />} />
        <Route path="last-step" element={<AddProfileStatus />} />
      </Route>
      {/* <Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
}

export default App;
