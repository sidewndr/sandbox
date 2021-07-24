import React from 'react'
import styled from 'styled-components'


export const BtnStl = styled.div`
  width: 40px;
  height: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 20px;
  font-weight: bold;
  
  background-color: #3d3d3d;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: .2s;

  &:hover {
    background-color: #5e5e5e;
  }

  &.active {
    background-color: #909090;
  }
`


export const Btn = ({text, isActive, onClick}) => {


  return (
    <BtnStl
      className={isActive ? 'active' : null}
      onClick={onClick}
    >
      {text}
    </BtnStl>
  )
}