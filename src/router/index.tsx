import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import { Details } from "../components/user/Details";
import { Album } from "../components/user/Album";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} >
            <Route path="details" element={<Details />} />
            <Route path="album" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
