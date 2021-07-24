import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Carousel} from "./carousel/carousel";
import styled from "styled-components";
import {GlobalStyles} from "./global-styles";

const AppStl = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const app = (
  <>
    <GlobalStyles />
    <AppStl>
      <Carousel />
    </AppStl>
  </>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
