import styled from "styled-components";
// import { BiUser } from "../../styles/Icons";

import { BiChevronLeft } from "../../styles/Icons";
import { BiChevronRight } from "../../styles/Icons";

export const Container = styled.div`
  background-color: #121212;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconLeft = styled(BiChevronLeft)`
  width: 50px;
  fill: gray;
  height: 50px;
`;

export const IconRight = styled(BiChevronRight)`
  width: 50px;
  fill: gray;
  height: 50px;
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > .inscreva {
    color: #c4c4c4;
    padding: 15px;
    font-size: larger;
  }

  > .entrar {
    background: #fff;
    color: #000;
    font-weight: bold;
    padding: 15px;
    border-radius: 20px;
    margin-right: 10px;
  }
`;
