import React from 'react'
import LogoComp from './LogoComp'
import ProfileBadge from './ProfileBadgeComp'
import SearchBar from './SearchBar'

function HomePageHeader() {
    return (
        <div>
            <LogoComp/>
            <ProfileBadge/>
            <SearchBar/>
        </div>
    )
}

export default HomePageHeader
