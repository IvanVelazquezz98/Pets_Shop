import react from 'react'
import styled from 'styled-components'

export default function DropdownContainer(){

    return (
      <DivContainerDropdown>
      </DivContainerDropdown>
    )
}

const DivContainerDropdown = styled.div`
  display: flex;
  width:10%
  height:3rem;
  border:solid 1px;
  background-color:black;
`;

const OptionsDropwdown = styled.select`
  display: flex;
 
`;