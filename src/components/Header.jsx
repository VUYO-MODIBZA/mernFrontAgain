import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
    <header>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/children">Children</Link>
          <Link to="/grandchildren">Grandchildren</Link>
          <Link to="/greatgrandchildren">Great-grandchildren</Link>
          <Link to="/greatgreatgrandchildren">Great-great-grandchildren</Link>
          <Link to="/greatgreatgreatgrandchildren">Great-great-great-grandchildren</Link>
        </nav>
    </header>
    )
}
