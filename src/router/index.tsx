import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";
import UserPage from "../components/user";
import Album from "../components/user/Album";
import Details from "../components/user/Details";
import Todos from "../components/user/todos";
import Item from "../components/user/todos/Item";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />}>
        
        
        <Route path="todos" element={<Todos />}/>
        <Route path="albums" element={<Album />}/>
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
