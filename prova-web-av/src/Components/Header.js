import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
          <nav>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Transacoes">Transacoes</Link></li>
          </ul>
          </nav>
      </header>
    )
}

export default Header;