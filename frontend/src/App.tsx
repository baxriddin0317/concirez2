import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import AddProfile from "./pages/AddProfile";
import Layout from "./Layout";
import AddProfileLayout from "./AddProfileLayout"
import VerificationProfile from "./pages/VerificationProfile";
import AddProfileStatus from "./pages/AddProfileStatus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
      </Route>
      <Route path="/add-profiles" element={<AddProfileLayout />}>
        <Route index element={<AddProfile />} />
        <Route path="verification" element={<VerificationProfile />} />
        <Route path="last-step" element={<AddProfileStatus />} />
      </Route>
    </Routes>
  );
}

export default App;
