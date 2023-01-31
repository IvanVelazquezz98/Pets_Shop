import react from 'react'
import styled from "styled-components";


export default function NavBar() {

    return (
        <NavBarContainer>
            <Logo>Imagen</Logo>
            <DivContainerDropdown>
                <DropdownText>
                    Inicio
                </DropdownText>
                   
                            <DropdownContainer >
                                        <DropdownOptions>
                                            MASCOTAS
                                        </DropdownOptions>
                                        <DropdownOptions>
                                            PERROS
                                        </DropdownOptions>
                                        <DropdownOptions>
                                            GATOS
                                        </DropdownOptions>
                            </DropdownContainer>
                <DropdownText>
                    Accesorios
                </DropdownText>
                <DropdownText>
                    Contacto
                </DropdownText>
            </DivContainerDropdown>


        </NavBarContainer>

    )

}

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 6rem;
  position: fixed;
  width: -webkit-fill-available;
  background-color:  #ffff;
`;

const DivContainerDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width:70%;
  background-color:  #ffff;
  align-items: center;
`;

const Logo = styled.image`
display: flex;
width: 30%;
height: 1rem;
margin-top: 5%;
margin-left: 2%;
`;

const DropdownText = styled.span`
color: #57f1c6;
font-size: inerit;
font-family: fantasy;
margin:3%;
cursor:pointer;
`;

const DropdownContainer = styled.select`
    display:flex;
    color: #57f1c6;
    font-size: inerit7u1;
    font-family: fantasy;
    margin:3%;
    cursor:pointer;
    border:none;
`;

const DropdownOptions = styled.option`
display:flex;
color: #57f1c6;
font-size: inerit;
width:8rem;
font-family: fantasy;
margin:3%;
cursor:pointer;
border:none;
`;