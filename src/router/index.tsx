import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Album from "../components/user/Album";
import Albums from "../components/user/Albums";

import Details from "../components/user/Details";
import Photos from "../components/user/Photos";
import Todos from "../components/user/todos";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
          <Route index element={<Details/>}/>
          <Route path="albums" element={<Albums/>}/>
            <Route path="albums/photos/:id" element={<Photos/>} />
          <Route path="todos" element={<Todos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
