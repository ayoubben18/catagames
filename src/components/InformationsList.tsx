import { SimpleGrid, Text } from "@chakra-ui/react";
import Information from "./Information";
import CreditScore from "./creditScore";
import { Game } from "./hooks/Game";

interface Props {
  game: Game;
}

const InformationsList = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <Information term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </Information>
      <Information term="Metascore">
        <CreditScore score={game.metacritic} />
      </Information>
      <Information term="Genres">
        {game.genres?.map(({ name, id }) => (
          <Text key={id}>{name}</Text>
        ))}
      </Information>
      <Information term="Publishers">
        {game.publishers?.map(({ name, id }) => (
          <Text key={id}>{name}</Text>
        ))}
      </Information>
    </SimpleGrid>
  );
};

export default InformationsList;
