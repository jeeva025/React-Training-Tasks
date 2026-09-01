import { Routes, Route, Navigate } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />

      <Route path="/users" element={<UserList />} />

      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;