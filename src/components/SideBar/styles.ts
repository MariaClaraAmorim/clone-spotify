import styled from "styled-components";
import { BsSpotify } from "../../styles/Icons";
import { AiFillHome } from "../../styles/Icons";
import { BiSearchAlt2 } from "../../styles/Icons";
import { MdOutlineLibraryMusic } from "../../styles/Icons";
import { AiOutlinePlusSquare } from "../../styles/Icons";
// import { AiFillHome } from "../../styles/Icons";

export const Container = styled.div`
  display: none;
  background-color: #000;

  @media (min-width: 300px) {
    display: flex;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    display: flex;
    padding: 25px;
    font-size: 30px;
  }

  > nav li {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 15px 0px 15px 30px;
    font-size: 15px;
  }
`;

export const Rota = styled.div`
  display: grid;
  font-size: 10px;
  margin-top: 46vh;

  > span {
    color: #fff;
  }
`;

export const IconSpotify = styled(BsSpotify)`
  width: auto;
  height: 40px;
  fill: #fff;
`;

export const IconLike = styled.img`
  width: auto;
  height: 25px;
`;

export const IconPlaylist = styled(AiOutlinePlusSquare)`
  width: auto;
  height: 25px;
  fill: #fff;
`;

export const IconHome = styled(AiFillHome)`
  width: auto;
  height: 25px;
  fill: #fff;
`;

export const IconSearch = styled(BiSearchAlt2)`
  width: auto;
  height: 25px;
  fill: #fff;
`;

export const IconBiblioteca = styled(MdOutlineLibraryMusic)`
  width: auto;
  height: 25px;
  fill: #fff;
`;

// export const IconSpotify = styled(BsSpotify)``;
// export const IconSpotify = styled(BsSpotify)``;
// export const IconSpotify = styled(BsSpotify)``;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const MenuButton = styled.button`
  &,
  a {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
      display: none;
    }

    a > span {
      display: none;
    }

    h3 {
      color: #fff;
      font-size: 25px;
    }

    @media (min-width: 1280px) {
      > span {
        display: inline;
        margin-left: 15px;
        font-weight: bold;
        /* font-size: 19px; */
        color: #fff;
      }
      text-decoration: none;
      padding-right: 15px;
    }

    padding: 9px 5px;
    outline: 0;
    background: transparent;

    & + button {
      margin-top: 16.5px;
    }

    & + button:last-child {
      margin-top: 33px;
      width: 40px;
      height: 40px;

      > span {
        display: none;
      }

      @media (min-width: 1280px) {
        width: 100%;
        height: unset;

        > span {
          display: inline;
        }
      }
    }

    cursor: pointer;
    border-radius: 25px;
  }
`;
