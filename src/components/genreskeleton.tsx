import {
  List,
  ListItem,
  Skeleton,
  HStack,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} marginRight="4" />
          <SkeletonText width="200px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
