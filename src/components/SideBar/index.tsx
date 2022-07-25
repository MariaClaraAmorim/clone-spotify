import React from "react";

import {
  Container,
  TopSide,
  MenuButton,
  // SearchIcon,
  // HashIcon,
  // BellIcon,
  // EmailIcon,
  // FavoriteIcon,
  // ProfileIcon,
  // BotSide,
  // Avatar,
  // ProfileData,
  // ExitIcon,
  IconSpotify,
  IconHome,
  IconSearch,
  IconPlaylist,
  IconBiblioteca,
  IconLike,
  Rota,
} from "./styles";

function SideBar() {
  return (
    <Container>
      <TopSide>
        <MenuButton>
          <a href="/">
            <IconSpotify />
            <h3>Spotify</h3>
          </a>
        </MenuButton>
        <MenuButton>
          <IconHome />
          <span>Início</span>
        </MenuButton>

        <MenuButton>
          <IconSearch />
          <span>Buscar</span>
        </MenuButton>

        <MenuButton>
          <IconBiblioteca />
          <span>Sua Biblioteca</span>
        </MenuButton>

        <MenuButton>
          <IconPlaylist />
          <span>Criar Playlist</span>
        </MenuButton>

        <MenuButton>
          <IconLike src="https://misc.scdn.co/liked-songs/liked-songs-300.png" />
          <span>Músicas Curtidas</span>
        </MenuButton>

        <Rota>
          <span>Cookies</span>
          <span>Privacidade</span>
        </Rota>
      </TopSide>
    </Container>
  );
}

export { SideBar };
