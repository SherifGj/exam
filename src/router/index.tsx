import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Album  from "../components/user/Album";
import Details from "../components/user/Details";
import Photos from "../components/user/Photos";
import Todos from "../components/user/todos";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
          <Route path="/user/:id/albums" element={<Album />} />
          <Route path="/user/:id/details" element={<Details />} />
          <Route path="/user/:id/todos" element={<Todos />} />
          <Route path="/user/:id/albums/photos/:id" element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
