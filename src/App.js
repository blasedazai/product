import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path="categories" element={<Categories/>} />
          <Route path="products" element={<Products/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
