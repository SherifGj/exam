import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Albums from "../components/user/Album";
import Details from "../components/user/Details";
import Todos from "../components/user/todos";
import { IUser } from "../interfaces/IUser";
// import Album from "../components/user/Album";



const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
          {/* <Route index element={<Details  />} /> */}
          <Route path="albums" element={<Albums />} />
          <Route path="todos" element={<Todos  />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
