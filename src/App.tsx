import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string | undefined;
}

const App = () => {
  const [gameQuery, setGameGuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameGuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              onSelectedGenre={(genre) => setGameGuery({ ...gameQuery, genre })}
              currentGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Flex paddingLeft={10}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameGuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectedSortOrder={(sortOrder) =>
                setGameGuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
