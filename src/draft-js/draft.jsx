import React, {useState} from 'react'
import styled from 'styled-components'
import { EditorState, RichUtils, convertToRaw, convertFromHTML } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import createVideoPlugin from '@draft-js-plugins/video';
import createResizeablePlugin from '@draft-js-plugins/resizeable';

import {ButtonAddImg} from "./button-add-img";
import {ButtonAddVideo} from "./button-add-video";

import {stateToHTML} from 'draft-js-export-html';


const DraftStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EditorContainerStl = styled.div`
  width: 40%;
  border: black 1px solid;
`

const ButtonsContainerStl = styled.div`
  display: flex;
  margin-bottom: 5px;
  
  button:not(:last-child) {
    margin-right: 5px;
  }
  
  div:not(:last-child) {
    margin-right: 5px;
  }
`

const resizeablePlugin = createResizeablePlugin()

const decorator = resizeablePlugin.decorator

const imagePlugin = createImagePlugin({decorator})
const videoPlugin = createVideoPlugin()
const plugins = [imagePlugin, resizeablePlugin, videoPlugin]


export const Draft = () => {

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  //Текущее значение:
  const getContent = () => {
    const contentState = editorState.getCurrentContent()

    let html = stateToHTML(contentState)
    console.log(html)
  }

  //Создание собственных стилей:
  const styleMap = {
    'HEADER-ONE': {
      fontSize: '32px'
    },
    'HEADER-TWO': {
      fontSize: '24px'
    },
    'HEADER-THREE': {
      fontSize: '19px'
    },
  }

  const onBoldClick = () => {
    setEditorState(
      RichUtils.toggleInlineStyle(editorState, 'BOLD')
    )
  }

  const onItalicClick = () => {
    setEditorState(
      RichUtils.toggleInlineStyle(editorState, 'ITALIC')
    )
  }

  const onUnderlineClick = () => {
    setEditorState(
      RichUtils.toggleInlineStyle(editorState, 'UNDERLINE')
    )
  }

  const onCodeClick = () => {
    setEditorState(
      RichUtils.toggleInlineStyle(editorState, 'CODE')
    )
  }

  const onHeaderOneClick = () => {
    setEditorState(
      RichUtils.toggleBlockType(editorState, 'header-one') //Применяется на всю строку
      // RichUtils.toggleInlineStyle(editorState, 'HEADER-ONE') //Применяется на выделенный фрагмент
    )
  }

  const onHeaderTwoClick = () => {
    setEditorState(
      RichUtils.toggleBlockType(editorState, 'header-two')
    )
  }

  const onHeaderThreeClick = () => {
    setEditorState(
      RichUtils.toggleBlockType(editorState, 'header-three')
    )
  }


  return (
    <DraftStl>
      <ButtonsContainerStl>
        <button onClick={onBoldClick}>B</button>
        <button onClick={onItalicClick}>I</button>
        <button onClick={onUnderlineClick}>U</button>
        <button onClick={onCodeClick}>Code</button>

        <button onClick={onHeaderOneClick}>H1</button>
        <button onClick={onHeaderTwoClick}>H2</button>
        <button onClick={onHeaderThreeClick}>H3</button>


        <button
          onClick={getContent}
        >
          CONSOLE
        </button>

        <ButtonAddImg
          editorState={editorState}
          onChange={setEditorState}
          modifier={imagePlugin.addImage}
        />

        <ButtonAddVideo
          editorState={editorState}
          onChange={setEditorState}
          modifier={videoPlugin.addVideo}
        />
      </ButtonsContainerStl>

      <EditorContainerStl>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={styleMap}
          plugins={plugins}
        />
      </EditorContainerStl>
    </DraftStl>
  )
}