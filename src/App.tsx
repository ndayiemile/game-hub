import { Grid, GridItem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
function App() {
  return (
    <ColorModeProvider>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem hideBelow="lg" area="aside" bg="gold">
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          <GameGrid />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
