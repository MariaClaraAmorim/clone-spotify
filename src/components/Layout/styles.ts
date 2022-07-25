import styled from "styled-components";

export const Grid = styled.div`
   overflow: hidden;
   display: grid;
   grid-template-columns: 3fr 25fr;
   grid-template-rows: 80px 1fr 80px;
   grid-template-areas: "aside header" "aside main" "aside footer";
   height: 100vh;
`;


export const DefaultTemplate = styled.div`
  /* overflow: hidden;
  display: grid;
  grid-template-columns: 3fr 25fr;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas: "aside header" "aside main" "aside footer";
  height: 100vh; */
`;


