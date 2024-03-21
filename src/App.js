import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-in/SignUp"
import Profile from "./profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
