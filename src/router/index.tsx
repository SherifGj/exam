import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Details from "../components/user/Details";
import Album from "../components/user/Album";
import Todo from "../components/user/todos";
import Photos from "../components/user/Photos";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
          <Route index element={<Details/>} />
          <Route path="albums" element={<Album/>} />
          <Route path="albums/photos/:id" element={<Photos/>} />
          <Route path="todos" element={<Todo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
