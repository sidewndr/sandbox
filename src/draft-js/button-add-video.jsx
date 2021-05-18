import React, {useState} from 'react'
import styled from 'styled-components'


const ButtonAddVideoStl = styled.div`
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


export const ButtonAddVideo = ({onChange, editorState, modifier}) => {

  const [openPopoverAddVideo, setOpenPopoverAddVideo] = useState(false)
  const togglePopoverAddVideo = () => setOpenPopoverAddVideo(!openPopoverAddVideo)

  const [urlAddVideo, setUrlAddVideo] = useState('')
  const changeUrlImg = (e) => setUrlAddVideo(e.target.value)

  const onAddVideoOkClick = () => {
    //Я НЕ ЗНАЮ ЧТО ТУТ ПРОИСХОДИТ :_(
    onChange(modifier(editorState, {src: urlAddVideo}))
  }

  return (
    <ButtonAddVideoStl>
      <button onClick={togglePopoverAddVideo}>VIDEO</button>
      {
        openPopoverAddVideo &&
        <PopoverStl>
          <InputStl onChange={changeUrlImg} />
          <button onClick={onAddVideoOkClick}>OK</button>
        </PopoverStl>
      }
    </ButtonAddVideoStl>
  )
}