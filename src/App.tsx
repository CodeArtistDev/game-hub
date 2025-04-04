import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGird from "./components/GameGird";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack
        hideBelow="lg"
      >
        <GridItem area="aside" >
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGird />
      </GridItem>
    </Grid>
  );
};

export default App;
