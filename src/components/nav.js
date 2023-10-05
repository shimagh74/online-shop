import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Nav = ()=>{
    return (
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">online shop</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/cart" className='nav-link'>cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
    }
    export default Nav;