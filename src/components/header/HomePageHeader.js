import React from 'react'
import LogoComp from './LogoComp'
import ProfileBadge from './ProfileBadgeComp'
import SearchBar from './SearchBar'
import styled from 'styled-components'

function HomePageHeader() {
    return (
        <div>
            <Container>
                <LogoContainer>
                    <LogoComp/>
                </LogoContainer>
                
                <SearchContainer>
                    <SearchBar/>
                </SearchContainer>

                <ProfileContainer>
                    <ProfileBadge/>
                </ProfileContainer>

            </Container>
        </div>
    )
}





const Container = styled.section`
    display: flex;
    flex-direction: row;
    justifyContent: 'space-evenly';
    background-color: #1C1D21;
    width: 100%;
    padding: 2em;

`;

const LogoContainer = styled.div` 
    width: 200px;
    height: 75px;
    border: solid;
    border-width: 2px;
    background-color: #1C1D21;

    img {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    
        display: block;
        border: solid;
        width: 150px;
    }
`;

const SearchContainer = styled.div`
    width: 200px;
    height: 75px;
    align: center;
`;

const ProfileContainer = styled.div`
    position: absolute;
    top: 8px;
    right: 20px;
`;

export default HomePageHeader
