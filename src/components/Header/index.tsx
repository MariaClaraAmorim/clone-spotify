import React from "react";

import { Container, IconLeft, IconRight, Botoes } from "./styles";

function Header() {
  return (
    <Container>
      <div>
        <IconLeft />
        <IconRight />
      </div>
      <Botoes>
        <button className="inscreva">Inscrever-se</button>
        <button className="entrar">Entrar</button>
      </Botoes>
    </Container>
  );
}

export { Header };
