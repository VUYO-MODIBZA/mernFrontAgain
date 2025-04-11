import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/children'>My Children</NavLink>
            <NavLink to='/grandchildren'>My Grandchildren</NavLink>
            <NavLink to='/greatgrandchildren'>My Great Grandchildren</NavLink>
            <NavLink to='/greatgreatgrandchildren'>My Great Great Grandchildren</NavLink>
        </nav>
    );
};

export default Navbar;
