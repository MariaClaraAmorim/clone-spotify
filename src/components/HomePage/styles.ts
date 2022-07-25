import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  overflow-y: scroll;
  padding: 10px;
  background: #161616;

  > h2 {
    color: #fff;
  }

  > section .blocos {
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: 200px;
  }

  > section .opa {
    display: grid;
    color: #fff;
    text-align: center;
    --radius: 10px;
    --inset: 0.5rem;
    /* left: 0; */
    overflow: hidden;
    background: #121212;
    -webkit-clip-path: inset(
      var(--inset-top, var(--inset)) var(--inset-right, var(--inset))
        var(--inset-bottom, var(--inset)) var(--inset-left, var(--inset)) round
        var(--radius)
    );
    clip-path: inset(
      var(--inset-top, var(--inset)) var(--inset-right, var(--inset))
        var(--inset-bottom, var(--inset)) var(--inset-left, var(--inset)) round
        var(--radius)
    );
    -webkit-transition: clip-path 0.3s ease 0.1s;
    transition: clip-path 0.3s ease 0.1s;

    :hover {
      clip-path: inset(0 0 0 0 round var(--radius));
      transition-delay: 0s;
    }

    /* 

    
        --radius: 10px;
    --inset: 2rem;
    --inset-right: 0;
    --offset: -1rem;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: var(--offset);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--cp-color-16);
    clip-path: inset(var(--inset-top,var(--inset)) var(--inset-right,var(--inset)) var(--inset-bottom,var(--inset)) var(--inset-left,var(--inset)) round var(--radius));
    contain: strict;
    transition: clip-path .3s ease .1s;

    
        clip-path: inset(0 0 0 0 round var(--radius));
    transition-delay: 0s;


    --card-container-border-radius: clamp(4px,(var(--column-width,0px) - 32px) * 0.025,8px);
    -webkit-box-flex: 1;
    background: #121212;
    border-radius: calc(var(--card-container-border-radius) + 2px);
    -ms-flex: 1;
    flex: 1;
    isolation: isolate;
    padding: 16px;
    position: relative;
    -webkit-transition: background-color .3s ease;
    transition: background-color .3s ease;
    width: 100%; */
  }

  > section div img {
    width: 50%;
    display: flex;
    justify-self: center;
    cursor: pointer;
  }

  .otasection {
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: 200px;
  }
`;
