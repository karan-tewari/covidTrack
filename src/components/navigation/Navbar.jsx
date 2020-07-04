import {Link} from 'react-router-dom';
import React from 'react';
import Worldmap from '../worldMap/Worldmap';

const Navbar = () => {
    return(
        <div>
        <Link component={Worldmap}>Home</Link>
        <Link>About</Link>
        </div>
    )
}

export default Navbar;