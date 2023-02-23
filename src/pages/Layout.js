  import { Outlet } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineFileSearch, AiOutlineGlobal } from "react-icons/ai";
import AsideMenu from "../components/asideMenu";
const Layout = ({search, list}) => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="container-01">
            <a href="#">
                <AiOutlineGlobal className="icon"/>
            </a>
          </div>
          <div>
            <h3> PRODUCTS PAGE</h3> 
          </div>
          <div className="container-02">
            <form>
              <input>
              </input> 
              <AiOutlineFileSearch className="search-icon"/>
            </form>
          </div>
        </div>
      </header>
      <div className="intermediate-container"></div>
      <main style={{backgroundColor:"darkcyan"}}>
        <div className="c-wrapper">
            <div className="contents">
            <div className="a-side">
            <div className="a-side-01">
              <AsideMenu/>
            </div>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
            </div>
        </div>
      </main>
      <div className="intermediate-container"></div>
      <footer style={{backgroundColor:"darkcyan"}}>
        <div className="footer-container">
            <div className="a-item">
                <a href="https://github.com/blasedazaii">
                    <AiFillGithub className="icon-01"/>
                </a>
                <span>Blasedazaii</span>
            </div>
            <hr/>
            <ul className="b-item">
                <li>
                    <a href="https://twitter.com/blasedazai">
                    <AiFillTwitterCircle  className="icon-02"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/blassedazaii/">
                        <AiFillInstagram  className="icon-02"/>
                    </a>
                </li>
                <li>
                    <a><AiFillFacebook  className="icon-02"/></a>
                </li>
            </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;
