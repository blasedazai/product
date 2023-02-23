import { Link } from "react-router-dom";
const AsideMenu = () => {
  return (
    <>
      <ul className="a-side-01-A">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </>
  );
};

export default AsideMenu;
