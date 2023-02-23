import {MdProductionQuantityLimits } from "react-icons/md";

const Home = () => {
    
   
    return (
        <>
        <div>
        <a className="home-icon" href="#">
            <MdProductionQuantityLimits className="home-icon-01" />
        </a>
        <p className="home-desc">Ürünlere ve Kategorilere yandaki menüden ulaşabilirsiniz!</p>
        <img className="home-img" src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2565&q=80"></img>
        </div>
        </>
    )

}
export default Home;
