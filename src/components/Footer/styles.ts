import styled from "styled-components";
// import { BiUser } from "../../styles/Icons";

export const Container = styled.div`
  grid-area: footer;

  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#af2896),
    to(#509bf5)
  );
  background-image: linear-gradient(90deg, #af2896, #509bf5);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: #fff;
  }
  > div p {
    font-size: 15px;
    font-family: monospace;
  }
  > div button {
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    font-weight: 600;
  }
`;

// export const Footer = styled.div`
//   grid-area: footer;
// `;
