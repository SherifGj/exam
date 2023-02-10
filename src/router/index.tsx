import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Details from "../components/user/Details";
import Album from "../components/user/Album";
import Item from "../components/user/todos";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
          <Route index element={<Details />} />
          <Route path="albums/:id" element={<Album />} />
          <Route path="todos" element={<Item />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
