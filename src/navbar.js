import { Link } from 'react-router-dom'








const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>the Dojo Blog</h1>
            <Link to="/">home</Link>
            <Link to="/create">New Blog</Link>
            
        </nav>




     );
}
 
export default Navbar;