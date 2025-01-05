import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { ColorModeProvider } from "./components/ui/color-mode";
function App() {
  return (
    <ColorModeProvider>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem hideBelow="lg" area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <Box px={3}>
            <GameHeading />
            <Flex mb={5}>
              <Box mr={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
