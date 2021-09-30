import React from 'react'
import styled from 'styled-components'

function ProfileBadgeComp() {
    return (
        <div>
            <Container>
                
                <Alert>
                    <img src="../images/Vector.svg" alt= 'alert'/> 
                </Alert>
                
                <Messaging>
                    <img src="../images/Mail.svg" alt= "Mail"/> 
                </Messaging>
                
                <ProfileImage>
                    <img width="75px;" src="https://100southmetro.org/wp-content/uploads/2020/11/ChristopherJones_edited-300x300.jpg" alt="profileImage"/>     
                </ProfileImage>

                <Username>
                   <p>Miguel Anderson</p>
                </Username>

            </Container>

        </div>
    )
}

const Container = styled.section`
    
`;

const Alert = styled.div`
    display: inline-block;
    width: 25px;
    height: 25px;
    img {
        width: 25px;
    }
`;

const Messaging = styled.div`
    display: inline-block;
    margin-left: 24px;
    padding-top: -124px;
    width: 25px;
    height: 25px;
    img {
        width: 25px;
    }
`;

const ProfileImage = styled.div`
        display: inline-block;
        margin-left: 24px;

    img{
        border-radius: 100%;
        height: 75px;
    }

`;

const Username = styled.div`
        display: inline-block;
        margin-left: 24px;
`;

export default ProfileBadgeComp
