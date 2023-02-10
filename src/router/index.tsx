import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Details from "../components/user/Details";
import Albums from "../components/user/Album";
import Todos from "../components/user/todos/index";
import Photos from "../components/user/Photos";



const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
          <Route index element={<Details />} /> 
          <Route path="/user/:id/albums" element={<Albums />} />
          <Route path="/user/:id/todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
