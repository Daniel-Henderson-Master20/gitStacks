import React from 'react'
import styled from 'styled-components'

function SearchBar() {
    return (
        <div>
            <InputContainer>
                <input type="text" placeholder="Search..."></input>
            </InputContainer>
         </div>
    )
}


const InputContainer = styled.section`
    input{
        float: center;
        color: #777;
        width: 400px;
        height: 40px;
        border: none;
        position: absolute;
        margin-top: 14px;
        border-radius: 24px;
        padding-left: 24px;
        dispaly: block;
        margin-left: 40px;
    }
    input:focus {
        outline: none;
    }
`;

export default SearchBar
