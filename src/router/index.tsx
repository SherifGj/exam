import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
// import Photos from "../components/user/Photos";
import Album from "../components/user/Album";
import Details from "../components/user/Details";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id/" element={<UserPage />}>
          {/* <Route path="albums/photos/:id" element={<Photos />} /> */}
          <Route path="albums" element={<Album />} />
          <Route path="todos" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
