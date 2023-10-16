import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useStyleConfig,
} from "@chakra-ui/react";
import { Game } from "./hooks/Game";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./creditScore";
import getCroppedImageUrl from "./services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  const cardStyles = useStyleConfig("Card");
  return (
    <Box
      __css={cardStyles}
      sx={{
        "&:hover": {
          transform: "scale(1.03)",
        },
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Card width="100%" borderRadius={10} overflow="hidden" marginRight="10px">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CreditScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Link to={"games/" + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Gamecard;
