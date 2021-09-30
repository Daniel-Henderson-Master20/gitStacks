import React from 'react'
import styled from 'styled-components'


function NavMain() {
    return (
        <div>
            <NavList>
                <li>Menu</li>
                <li>Browse</li>
                <li>Watchlist</li>
                <li>Coming Soon</li>
                <li>Active Developers</li>
                <li>Social</li>
                <li>Connections</li>
                <li>Watchlist</li>
                <li>Projects</li>
                <li>General</li>
                <li>Settings</li>
                <li>Log out</li>
            </NavList>
        </div>
    )
}


const NavList = styled.div`
    height: 500px;
    width: 200px;
    padding-left: 20px;

    list-style-type: none;

    li {
        padding: 10px;
    }

    li:hover {
        color: #253070;
        cursor: pointer;
    }
`;

export default NavMain
