// import { DefaultTemplate } from "../../templates/Default";
// import { SideBar } from "../../SideBar";
// import { Header } from "../../Header";
// import { Footer } from "../../Footer";

import { SideBar } from "../SideBar";

import { Header } from "../Header";

import { Footer } from "../Footer";

import { HomePage } from "../HomePage";

import { Grid } from "./styles";

function Layout() {
  return (
    <Grid>
      <SideBar />
      <Header />

      <HomePage />

      <Footer />
    </Grid>
  );
}

export { Layout };
