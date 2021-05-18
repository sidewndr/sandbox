import React, {useState} from 'react'
import styled from 'styled-components'


const ButtonAddImgStl = styled.div`
  display: flex;
`

const PopoverStl = styled.div`
  position: relative;
  display: flex;
  border: black 1px solid;
`

const InputStl = styled.input`
  border: none;
  outline: none;
`


export const ButtonAddImg = ({onChange, editorState, modifier}) => {

  const [openPopoverAddImg, setOpenPopoverAddImg] = useState(false)
  const togglePopoverAddImg = () => setOpenPopoverAddImg(!openPopoverAddImg)

  const [urlAddImg, setUrlAddImg] = useState('')
  const changeUrlImg = (e) => setUrlAddImg(e.target.value)

  const onAddImgOkClick = () => {
    //Я НЕ ЗНАЮ ЧТО ТУТ ПРОИСХОДИТ :_(
    onChange(modifier(editorState, urlAddImg))
  }

  return (
    <ButtonAddImgStl>
      <button onClick={togglePopoverAddImg}>IMG</button>
      {
        openPopoverAddImg &&
          <PopoverStl>
            <InputStl onChange={changeUrlImg} />
            <button onClick={onAddImgOkClick}>OK</button>
          </PopoverStl>
      }
    </ButtonAddImgStl>
  )
}