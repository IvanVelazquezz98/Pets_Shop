import react from 'react'
import styled from "styled-components";
import NavBar from '../NavBar/index' 

export default function Home () {


    return(
        <FirstDivContainer>
            <NavBar/>
        </FirstDivContainer>

    )

}


const FirstDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
    height : 150vh;
  width: -webkit-fill-available;
  background-color:  #eaeaed;
`;