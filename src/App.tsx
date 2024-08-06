import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import MenuLeft from "./Components/MenuLeft";

function App(props: { children: React.ReactNode }) {
  const params = useLocation();

  function renderMenu() {
    if (params.pathname === "/" || params.pathname === "/login") {
      return null;
    } else {
      return <MenuLeft />;
    }
  }

  const menu = renderMenu();

  return (
    <>
      <Box>
        <Header />
        <Grid container>
          {menu ? (
            <>
              <Grid item xs={3}>
                {menu}
              </Grid>
              <Grid item xs={9}>
                {props.children}
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              {props.children}
            </Grid>
          )}
        </Grid>
        <Footer />
      </Box>
    </>
  );
}

export default App;
