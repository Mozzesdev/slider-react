import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root{
  --unnamed-color-5a5a5a: #5A5A5A;
  --unnamed-color-f5f5f5: #F5F5F5;
  --unnamed-color-aaaaaa: #AAAAAA;
  --unnamed-color-eba6b0: #EBA6B0;
  --unnamed-color-707070: #323232;
 }

 *,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 
 body{
  font-family: 'Roboto', sans-serif;
  background-color: #fcfcfc;
  min-height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
 }
 #root{
  padding: 120px 0 84px;
 }
`;
