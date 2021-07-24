import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import {Btn, BtnStl} from "./btn";


const CarouselStl = styled.div`
  position: relative;
  display: flex;
  
  width: 500px;
  height: 500px;
  overflow: hidden;
  border: 1px solid black;
`

const BtnControlContainerStl = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  
  & > ${BtnStl}:not(:last-child){
    margin-right: 10px;
  }
`

const BtnPrevNextContainerStl = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 10px;
  width: 100%;
`

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `

const CarouselItemStl = styled.div`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({bgColor}) => bgColor};

  // &.active {
  //  animation: fadeIn 1s;
  // }
  
  //Animation:
  opacity: 0;
  
  &.active {
    opacity: 1;
    transition: 500ms;
  }
`


export const Carousel = () => {

  const itemsMock = [
    {
      color: 'red',
    },
    {
      color: 'blue',
    },
    {
      color: 'yellow',
    },
    {
      color: 'green',
    }
  ]




  const [items, setItems] = useState([])
  const [activeItem, setActiveItem] = useState(0)


  useEffect(() => {
    setItems(() => {
      const arr = itemsMock
      arr[activeItem].isActive = true

      return arr
    })
  }, [activeItem])

  const handleClick = (index) => {
    setActiveItem(index)
  }

  const handlePrevItem = (items) => {
    if (activeItem === 0) {
      setActiveItem(items.length - 1)
    } else {
      setActiveItem(activeItem - 1)
    }
  }

  const handleNextItem = (items) => {
    if (activeItem === items.length - 1) {
      setActiveItem(0)
    } else {
      setActiveItem(activeItem + 1)
    }
  }



  return (
    <CarouselStl>
      {
        items
          .filter((item) => item.isActive)
          .map((item, index) =>
            <CarouselItemStl
              key={index}
              className={'active'}
              bgColor={item.color} //TODO: image src
            />
          )
      }

      <BtnPrevNextContainerStl>
        <Btn
          text={'<'}
          onClick={() => handlePrevItem(items)}
        />
        <Btn
          text={'>'}
          onClick={() => handleNextItem(items)}
        />
      </BtnPrevNextContainerStl>

      <BtnControlContainerStl>
        {
          items.map((item, index) => (
            <Btn
              key={index}
              isActive={item.isActive}
              onClick={() => handleClick(index)}
            />
          ))
        }
      </BtnControlContainerStl>
    </CarouselStl>
  )
}