import { Grid, GridItem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </ColorModeProvider>
  );
}

export default App;
