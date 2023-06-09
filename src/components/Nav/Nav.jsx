import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import logoRM from "../../assets/logo.png";

const Nav = ({ onSearch }) => {
  return (
    <nav className={style.navContainer}>
      
      <div className={style.containerButton}>
        <Link className={style.link} to="/home">
          Home
        </Link>
        <Link className={style.link} to="/favorites">
          Favorites
        </Link>
        <Link className={style.link} to="/about">
          About
        </Link> 
        </div>

     
        <img className={style.image} src={logoRM} alt="logo" />
        

        <div>
        <SearchBar className={style.searchBar} onSearch={onSearch} />
        </div>
     
    </nav>
  );
};

export default Nav;
