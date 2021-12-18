import { Link } from "react-router-dom";
import styler from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styler.navbar}>
            <ul className={styler.nav_links}>
                <li className={styler.nav_item}>
                    <Link to="/" className={styler.nav_link}>
                        Home    
                    </Link>   
                </li>
                <li className={styler.nav_item}>
                    <Link to="/" className={styler.nav_link}>
                        Action    
                    </Link>  
                </li>
                <li className={styler.nav_item} >
                    <Link to="/" className={styler.nav_link}>
                        Drama    
                    </Link>   
                </li>
                <li className={styler.nav_item}>
                    <Link to="/" className={styler.nav_link}>
                        Documentary    
                    </Link>   
                </li>
                <li className={styler.nav_item}>
                    <Link to="/" className={styler.nav_link}>
                        Musical    
                    </Link>
                </li>
                <li className={styler.nav_item}>
                    <Link to="/" className={styler.nav_link}>
                        Comedy    
                    </Link>  
                </li>          

            </ul>
        </div>
    )
}

export default Navbar;